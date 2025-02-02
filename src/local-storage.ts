import { StorageMechanism } from "./storage-mechanism";

export class LocalStorage extends StorageMechanism {
    public constructor(storage: Storage) {
        super(storage);
    }
}