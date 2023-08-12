export class EventBus {
    private readonly listeners: Record<string, Array<() => void>> = {};

    on(event: string, callback: () => void) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: () => void) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: () => void) => listener !== callback
        );
    }

    emit(event: string, args?: unknown) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener: (args: unknown) => void) => {
            listener(args);
        })
    }
}

// const eventBus = new EventBus();
//
// eventBus.on('event', (data) => {
//     console.log(data)
// })
//
// eventBus.emit('event', { property: 'value' })
