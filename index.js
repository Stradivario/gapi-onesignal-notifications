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
const core_1 = require("@gapi/core");
const client_1 = require("./client");
let GapiOneSignalModule = GapiOneSignalModule_1 = class GapiOneSignalModule {
    static forRoot(config) {
        return {
            gapiModule: GapiOneSignalModule_1,
            services: [
                {
                    provide: client_1.GapiOneSignalClientService,
                    useFactory: () => new client_1.GapiOneSignalClientService(config)
                }
            ]
        };
    }
};
GapiOneSignalModule = GapiOneSignalModule_1 = __decorate([
    core_1.GapiModule()
], GapiOneSignalModule);
exports.GapiOneSignalModule = GapiOneSignalModule;
__export(require("./notification"));
__export(require("./client"));
var GapiOneSignalModule_1;
