import { StorageMechanism } from "./StorageMechanism";

export class LocalStorage extends StorageMechanism {
    public constructor(storage: Storage) {
        super(storage);
    }
}