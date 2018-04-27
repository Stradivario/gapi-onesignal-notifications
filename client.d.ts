import { OneSignalClient } from './interfaces/client';
import { GapiOneSignalConfig } from './onesignal.config';
import { SendNotificationResponse } from './interfaces/notificationResponse';
export declare class GapiOneSignalClientService implements OneSignalClient {
    API_URI: string;
    app: any;
    apps: any;
    userAuthKey: string;
    constructor(credentials: GapiOneSignalConfig);
    basicRequest(url: string, apiKey: string, method: 'PUT' | 'POST' | 'GET' | 'DELETE', body: any): Promise<any>;
    setRootUrl(rootUrl: string): void;
    setApp(app: any): void;
    sendNotification(notification: any): Promise<SendNotificationResponse>;
    cancelNotification(notificationId: string): Promise<any>;
    viewNotification(notificationId: string): Promise<any>;
    viewNotifications(query: {
        limit: number;
        offset: number;
    }): Promise<any>;
    viewApps(callback: any): Promise<any>;
    viewApp(appId: string): Promise<any>;
    createApp(body: any): Promise<any>;
    updateApp(body: any): Promise<any>;
    viewDevices(query: {
        limit: number;
        offset: number;
    }): Promise<any>;
    viewDevice(deviceId: string): Promise<any>;
    addDevice(body: any): Promise<any>;
    editDevice(deviceId: string, body: any): Promise<any>;
    trackOpen(notificationId: string, body: any): Promise<any>;
    csvExport(body: any): Promise<any>;
}
