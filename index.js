"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const client_1 = require("./client");
let OneSignalModule = OneSignalModule_1 = class OneSignalModule {
    static forRoot(config) {
        core_1.Container.set(client_1.OneSignalClientService, new client_1.OneSignalClientService(config));
        return {
            module: OneSignalModule_1
        };
    }
};
OneSignalModule = OneSignalModule_1 = __decorate([
    core_1.Module()
], OneSignalModule);
exports.OneSignalModule = OneSignalModule;
__export(require("./notification"));
__export(require("./client"));
var OneSignalModule_1;
