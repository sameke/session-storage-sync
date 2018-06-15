System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StorageMechanism;
    return {
        setters: [],
        execute: function () {
            StorageMechanism = (function () {
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
            exports_1("StorageMechanism", StorageMechanism);
        }
    };
});
