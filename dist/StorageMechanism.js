define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StorageMechanism = (function () {
        function StorageMechanism(storage) {
            this._storage = storage;
        }
        Object.defineProperty(StorageMechanism.prototype, "length", {
            get: function () {
                return this._storage.length;
            },
            enumerable: true,
            configurable: true
        });
        StorageMechanism.prototype.get = function (key) {
            return JSON.parse(this._storage.getItem(key));
        };
        StorageMechanism.prototype.set = function (key, value) {
            this._storage.setItem(key, JSON.stringify(value));
        };
        StorageMechanism.prototype.remove = function (key) {
            this._storage.removeItem(key);
        };
        StorageMechanism.prototype.clear = function () {
            this._storage.clear();
        };
        StorageMechanism.prototype.key = function (index) {
            return JSON.parse(this._storage.key(index));
        };
        return StorageMechanism;
    }());
    exports.StorageMechanism = StorageMechanism;
});
