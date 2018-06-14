export abstract class StorageMechanism {
    protected _storage: Storage;

    public constructor(storage: Storage) {
        this._storage = storage;
    }

    public get length() {
        return this._storage.length;
    }

    public get(key: string): any {
        return JSON.parse(this._storage.getItem(key));
    }

    public set(key: string, value: any): void {
        this._storage.setItem(key, JSON.stringify(value));
    }

    public remove(key: string): void {
        this._storage.removeItem(key);
    }

    public clear(): void {
        this._storage.clear();
    }

    public key(index: number): any {
        return JSON.parse(this._storage.key(index));
    }
}