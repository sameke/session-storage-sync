var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./StorageMechanism"], function (require, exports, StorageMechanism_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SessionStorage = (function (_super) {
        __extends(SessionStorage, _super);
        function SessionStorage(storage) {
            var _this = _super.call(this, storage) || this;
            _this._events = {
                set: [],
                delete: [],
                clear: []
            };
            return _this;
        }
        SessionStorage.prototype.set = function (key, value) {
            _super.prototype.set.call(this, key, value);
            this._events.set.forEach(function (l) {
                l(key, value);
            });
        };
        SessionStorage.prototype.remove = function (key) {
            _super.prototype.remove.call(this, key);
            this._events.delete.forEach(function (l) {
                l(key);
            });
        };
        SessionStorage.prototype.clear = function () {
            _super.prototype.clear.call(this);
            this._events.clear.forEach(function (l) {
                l();
            });
        };
        SessionStorage.prototype.addEventListener = function (event, listener) {
            this._events[event].push(listener);
        };
        return SessionStorage;
    }(StorageMechanism_1.StorageMechanism));
    exports.SessionStorage = SessionStorage;
});
