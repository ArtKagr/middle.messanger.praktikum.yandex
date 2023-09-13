import { Callback, ObjType, ObjTypes } from '../typings';

type EventBusGuard = Callback[] & ObjTypes[];

export class EventBus {
    private listeners: Record<string, EventBusGuard> = {};
    on(event: string, callback: Callback & ObjType) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: Callback & ObjType): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(listener => listener !== callback) as EventBusGuard;
    }

    emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(listener => listener(args))
    }
}
