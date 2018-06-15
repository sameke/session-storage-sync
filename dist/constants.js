System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WINDOW_STORAGE_EVENT, GET_SESSION_STORAGE_KEY, SET_SESSION_STORAGE_KEY, CLEAR_SESSION_STORAGE_KEY, DELETE_SESSION_STORAGE_KEY, ADD_TO_SESSION_STORAGE_KEY, SESSION_STORAGE_ID;
    return {
        setters: [],
        execute: function () {
            WINDOW_STORAGE_EVENT = 'storage';
            exports_1("WINDOW_STORAGE_EVENT", WINDOW_STORAGE_EVENT);
            GET_SESSION_STORAGE_KEY = '_getSessionStorage';
            exports_1("GET_SESSION_STORAGE_KEY", GET_SESSION_STORAGE_KEY);
            SET_SESSION_STORAGE_KEY = '_setSessionStorage';
            exports_1("SET_SESSION_STORAGE_KEY", SET_SESSION_STORAGE_KEY);
            CLEAR_SESSION_STORAGE_KEY = '_clearSessionStorage';
            exports_1("CLEAR_SESSION_STORAGE_KEY", CLEAR_SESSION_STORAGE_KEY);
            DELETE_SESSION_STORAGE_KEY = '_deleteSessionStorage';
            exports_1("DELETE_SESSION_STORAGE_KEY", DELETE_SESSION_STORAGE_KEY);
            ADD_TO_SESSION_STORAGE_KEY = '_addToSessionStorage';
            exports_1("ADD_TO_SESSION_STORAGE_KEY", ADD_TO_SESSION_STORAGE_KEY);
            SESSION_STORAGE_ID = '_sessionStorageId';
            exports_1("SESSION_STORAGE_ID", SESSION_STORAGE_ID);
        }
    };
});
