class EventBus {
    private readonly listeners: Record<string, any[]>;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: any) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: any, callback: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: any) => listener !== callback
        );
    }

    emit(event: any, ...args: any[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener: any) => {
            listener(...args);
        })
    }
}
