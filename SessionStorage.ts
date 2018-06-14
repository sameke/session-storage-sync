import { StorageMechanism } from "./StorageMechanism";

export class SessionStorage extends StorageMechanism {
    private _events: {
        [key: string]: ((key?: string, value?: string) => void)[],
        set: ((key: string, value: string) => void)[],
        delete: ((key: string) => void)[],
        clear: (() => void)[]
    } = {
            set: [],
            delete: [],
            clear: []
        };

    public constructor(storage: Storage) {
        super(storage);
    }

    public set(key: string, value: any) {
        super.set(key, value);
        this._events.set.forEach((l) => {
            l(key, value);
        });
    }

    public remove(key: string): void {
        super.remove(key);
        this._events.delete.forEach((l) => {
            l(key);
        });
    }

    public clear(): void {
        super.clear();
        this._events.clear.forEach((l) => {
            l();
        });
    }

    public addEventListener(event: string, listener: (key?: string, value?: string) => void): void {
        this._events[event].push(listener);
    }
}