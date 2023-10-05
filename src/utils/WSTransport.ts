import { EventBus } from "./EventBus";

class WebSocketEvents {
    public static readonly Connected: string = 'connected';
    public static readonly Error: string = 'error';
    public static readonly Message: string = 'message';
    public static readonly Close: string = 'close';
}

class WSTransport extends EventBus {
    private socket: WebSocket | null = null;
    private pingInterval: NodeJS.Timer | number = 0;

    constructor(private url: string) {
        super();
    }

    public send(data: unknown): void {
        if (!this.socket) {
            throw new Error('Socket is not connected');
        }
        this.socket.send(JSON.stringify(data));
    }

    public connect(): Promise<void> {
        this.socket = new WebSocket(this.url);
        this.subscribe(this.socket);
        this.setupPing();
        return new Promise((res): void => {
            this.on(WebSocketEvents.Connected, () => {
                res();
            })
        })
    }

    public close(): void {
        clearInterval(this.pingInterval);
        this.socket?.close();
    }

    private setupPing(): void {
        this.pingInterval = setInterval((): void => {
            this.send({ type: 'ping' });
        }, 5000);

        this.on(WebSocketEvents.Close, (): void => {
            clearInterval(this.pingInterval);
            this.pingInterval = 0;
        });

    }

    private subscribe(socket: WebSocket): void {
        socket.addEventListener('open', (): void => {
            this.emit(WebSocketEvents.Connected);
        });
        socket.addEventListener('close', (): void => {
            this.emit(WebSocketEvents.Close);
        });
        socket.addEventListener('error', (e: Event): void => {
            this.emit(WebSocketEvents.Error, e);
        });
        socket.addEventListener('message', (message: MessageEvent): void => {
            const payload = JSON.parse(message.data);
            if (payload?.type === 'pong') {
                return;
            }
            this.emit(WebSocketEvents.Message, payload);
        });
    }
}

export {
    WebSocketEvents,
    WSTransport
}

