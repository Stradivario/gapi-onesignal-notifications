"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const constants_1 = require("./constants");
const onesignal_config_1 = require("./onesignal.config");
const core_1 = require("@rxdi/core");
function checkCredential(credentialName, credential) {
    const ALLOWED_CREDENTIALS = [
        { name: 'userAuthKey', type: 'string' },
        { name: 'app', type: 'object', requiredFields: ['appAuthKey', 'appId'] },
        { name: 'apps', type: 'object' }
    ];
    for (var i = 0; i < ALLOWED_CREDENTIALS.length; i++) {
        if (ALLOWED_CREDENTIALS[i].name === credentialName) {
            if (typeof credential !== ALLOWED_CREDENTIALS[i].type) {
                throw credentialName + ' must be a ' + ALLOWED_CREDENTIALS[i].type;
            }
            if (ALLOWED_CREDENTIALS[i].requiredFields) {
                for (var j = 0; j < ALLOWED_CREDENTIALS[i].requiredFields.length; j++) {
                    if (!(ALLOWED_CREDENTIALS[i].requiredFields[j] in credential)) {
                        throw credentialName + ' must contain ' + ALLOWED_CREDENTIALS[i].requiredFields[j];
                    }
                }
            }
            return true;
        }
    }
    return false;
}
;
;
let OneSignalClientService = class OneSignalClientService {
    constructor(credentials) {
        if (typeof credentials !== 'object') {
            throw 'credentials parameter must be a JSON object';
        }
        this.API_URI = constants_1.Constants.API_ROOT;
        for (var key in credentials) {
            if (credentials.hasOwnProperty(key) && checkCredential(key, credentials[key])) {
                this[key] = credentials[key];
            }
        }
    }
    basicRequest(url, apiKey, method, body) {
        var options = {
            url: url,
            method: method
        };
        if (apiKey) {
            options.headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Basic ' + apiKey
            };
        }
        if (body) {
            options.body = body;
            options.json = true;
        }
        return new Promise(function (resolve, reject) {
            request(options, function (err, httpResponse, data) {
                if (err) {
                    return reject(err);
                }
                return resolve({ httpResponse: httpResponse, data: data });
            });
        });
    }
    ;
    setRootUrl(rootUrl) {
        if (!rootUrl) {
            throw 'You must set a valid rootUsrl.';
        }
        this.API_URI = rootUrl;
    }
    setApp(app) {
        checkCredential('app', app);
        this.app = app;
    }
    sendNotification(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!notification || !notification.postBody) {
                throw 'notification parameter must be a typeof Notification object.';
            }
            var postBody = notification.postBody;
            if (this.apps && this.apps.length > 0) {
                postBody.app_ids = this.apps;
                return yield this.basicRequest(this.API_URI + constants_1.Constants.NOTIFICATIONS_PATH, this.userAuthKey, 'POST', postBody);
            }
            if (this.app) {
                postBody.app_id = this.app.appId;
                return yield this.basicRequest(this.API_URI + constants_1.Constants.NOTIFICATIONS_PATH, this.app.appAuthKey, 'POST', postBody);
            }
            throw 'You must set either an "app" or "apps" on Client';
        });
    }
    cancelNotification(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            var notificationUri = this.API_URI + constants_1.Constants.NOTIFICATIONS_PATH + '/' + notificationId + '?app_id=' + this.app.appId;
            return yield this.basicRequest(notificationUri, this.app.appAuthKey, 'DELETE', null);
        });
    }
    viewNotification(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            var notificationUri = this.API_URI + constants_1.Constants.NOTIFICATIONS_PATH + '/' + notificationId + '?app_id=' + this.app.appId;
            return yield this.basicRequest(notificationUri, this.app.appAuthKey, 'GET', null);
        });
    }
    viewNotifications(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            var appUri = this.API_URI + constants_1.Constants.NOTIFICATIONS_PATH + '?app_id=' + this.app.appId + '&' + query;
            return yield this.basicRequest(appUri, this.app.appAuthKey, 'GET', null);
        });
    }
    viewApps(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userAuthKey) {
                throw 'You must define "userAuthKey" on Client';
            }
            return yield this.basicRequest(this.API_URI + constants_1.Constants.APPS_PATH, this.userAuthKey, 'GET', null);
        });
    }
    viewApp(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userAuthKey) {
                throw 'You must define "userAuthKey" on Client';
            }
            return yield this.basicRequest(this.API_URI + constants_1.Constants.APPS_PATH + '/' + appId, this.userAuthKey, 'GET', null);
        });
    }
    createApp(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!body.name) {
                throw 'You must specify a name in body';
            }
            if (!this.userAuthKey) {
                throw 'You must define "userAuthKey" on Client';
            }
            return yield this.basicRequest(this.API_URI + constants_1.Constants.APPS_PATH, this.userAuthKey, 'POST', body);
        });
    }
    updateApp(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            if (!this.userAuthKey) {
                throw 'You must define "userAuthKey" on Client';
            }
            return yield this.basicRequest(this.API_URI + constants_1.Constants.APPS_PATH + '/' + this.app.appId, this.userAuthKey, 'PUT', body);
        });
    }
    viewDevices(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            var viewUri = this.API_URI + constants_1.Constants.DEVICES_PATH + '?app_id=' + this.app.appId + '&' + query;
            return yield this.basicRequest(viewUri, this.app.appAuthKey, 'GET', null);
        });
    }
    viewDevice(deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            var viewUri = this.API_URI + constants_1.Constants.DEVICES_PATH + '/' + deviceId + '?app_id=' + this.app.appId;
            return yield this.basicRequest(viewUri, this.app.appAuthKey, 'GET', null);
        });
    }
    addDevice(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            if (!('app_id' in body)) {
                body.app_id = this.app.appId;
            }
            return yield this.basicRequest(this.API_URI + constants_1.Constants.DEVICES_PATH, this.app.appAuthKey, 'POST', body);
        });
    }
    editDevice(deviceId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            return yield this.basicRequest(this.API_URI + constants_1.Constants.DEVICES_PATH + '/' + deviceId, this.app.appAuthKey, 'PUT', body);
        });
    }
    trackOpen(notificationId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            if (!('app_id' in body)) {
                body.app_id = this.app.appId;
            }
            return yield this.basicRequest(this.API_URI + constants_1.Constants.NOTIFICATIONS_PATH + '/' + notificationId, this.app.appAuthKey, 'PUT', body);
        });
    }
    csvExport(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app) {
                throw 'You must define an "app" object.';
            }
            var csvUri = this.API_URI + constants_1.Constants.DEVICES_PATH + '/csv_export' + '?app_id=' + this.app.appId;
            return yield this.basicRequest(csvUri, this.app.appAuthKey, 'POST', body);
        });
    }
};
OneSignalClientService = __decorate([
    core_1.Service(),
    __metadata("design:paramtypes", [onesignal_config_1.OneSignalConfig])
], OneSignalClientService);
exports.OneSignalClientService = OneSignalClientService;
