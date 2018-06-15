define(["require", "exports", "./uuid", "./constants", "./LocalStorage", "./SessionStorage"], function (require, exports, uuid, constants_1, LocalStorage_1, SessionStorage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Storage = (function () {
        function Storage(ignoredKeys) {
            this._isInitialized = false;
            this._sessionId = uuid();
            this._ignored = [].concat(ignoredKeys);
            this._ignored.push(constants_1.SESSION_STORAGE_ID);
            this._local = new LocalStorage_1.LocalStorage(window.localStorage);
            this._session = new SessionStorage_1.SessionStorage(window.sessionStorage);
            this._session.addEventListener('set', this.onSetItem.bind(this));
            this._session.addEventListener('delete', this.onDeleteItem.bind(this));
            this._session.addEventListener('clear', this.onClearItems.bind(this));
            this.listenForStorageEvents();
        }
        Object.defineProperty(Storage.prototype, "local", {
            get: function () {
                return this._local;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Storage.prototype, "session", {
            get: function () {
                return this._session;
            },
            enumerable: true,
            configurable: true
        });
        Storage.prototype.listenForStorageEvents = function () {
            var _this = this;
            window.addEventListener(constants_1.WINDOW_STORAGE_EVENT, function (event) {
                if (event == null) {
                    event = window.event;
                }
                if (event == null)
                    return;
                var eventData = null;
                try {
                    eventData = JSON.parse(event.newValue);
                }
                catch (ex) {
                }
                if (eventData != null && eventData[constants_1.SESSION_STORAGE_ID] === _this._sessionId)
                    return;
                if (eventData != null)
                    delete eventData[constants_1.SESSION_STORAGE_ID];
                if (event.key === constants_1.GET_SESSION_STORAGE_KEY && event.newValue != null) {
                    try {
                        if (_this.session.length > 0) {
                            var data_1 = JSON.parse(JSON.stringify(window.sessionStorage));
                            _this._ignored.forEach(function (i) {
                                delete data_1[i];
                            });
                            data_1[constants_1.SESSION_STORAGE_ID] = _this._sessionId;
                            _this.local.set(constants_1.SET_SESSION_STORAGE_KEY, data_1);
                            _this.local.remove(constants_1.SET_SESSION_STORAGE_KEY);
                        }
                    }
                    catch (_a) {
                        _this.local.remove(constants_1.SET_SESSION_STORAGE_KEY);
                    }
                }
                else if (event.key === constants_1.SET_SESSION_STORAGE_KEY && event.newValue != null) {
                    try {
                        if (_this._isInitialized === true)
                            return;
                        _this._isInitialized = true;
                        if (eventData != null) {
                            for (var p in eventData) {
                                window.sessionStorage.setItem(p, eventData[p]);
                            }
                        }
                    }
                    catch (_b) {
                    }
                }
                else if (event.key === constants_1.ADD_TO_SESSION_STORAGE_KEY && event.newValue != null) {
                    try {
                        window.sessionStorage.setItem(eventData.key, eventData.value);
                    }
                    catch (_c) {
                    }
                }
                else if (event.key === constants_1.DELETE_SESSION_STORAGE_KEY && event.newValue != null) {
                    window.sessionStorage.removeItem(eventData.key);
                }
                else if (event.key === constants_1.CLEAR_SESSION_STORAGE_KEY && event.newValue != null) {
                    window.sessionStorage.clear();
                }
            }, {
                capture: true,
                passive: true
            });
            if (this.session.length <= 0) {
                this.local.set(constants_1.GET_SESSION_STORAGE_KEY, (_a = {}, _a[constants_1.SESSION_STORAGE_ID] = this._sessionId, _a));
                this.local.remove(constants_1.GET_SESSION_STORAGE_KEY);
            }
            var _a;
        };
        Storage.prototype.onSetItem = function (key, value) {
            this.local.set(constants_1.ADD_TO_SESSION_STORAGE_KEY, (_a = { key: key, value: value }, _a[constants_1.SESSION_STORAGE_ID] = this._sessionId, _a));
            this.local.remove(constants_1.ADD_TO_SESSION_STORAGE_KEY);
            var _a;
        };
        Storage.prototype.onDeleteItem = function (key) {
            this.local.set(constants_1.DELETE_SESSION_STORAGE_KEY, (_a = { key: key }, _a[constants_1.SESSION_STORAGE_ID] = this._sessionId, _a));
            this.local.remove(constants_1.DELETE_SESSION_STORAGE_KEY);
            var _a;
        };
        Storage.prototype.onClearItems = function () {
            this.local.set(constants_1.CLEAR_SESSION_STORAGE_KEY, (_a = {}, _a[constants_1.SESSION_STORAGE_ID] = this._sessionId, _a));
            this.local.remove(constants_1.CLEAR_SESSION_STORAGE_KEY);
            var _a;
        };
        return Storage;
    }());
    exports.Storage = Storage;
});
