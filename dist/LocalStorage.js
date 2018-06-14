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
    var LocalStorage = (function (_super) {
        __extends(LocalStorage, _super);
        function LocalStorage(storage) {
            return _super.call(this, storage) || this;
        }
        return LocalStorage;
    }(StorageMechanism_1.StorageMechanism));
    exports.LocalStorage = LocalStorage;
});
