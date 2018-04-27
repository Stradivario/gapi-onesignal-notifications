import { OneSignalClient } from './interfaces/client';
import { GapiOneSignalConfig } from './onesignal.config';
import { SendNotificationResponse } from './interfaces/notificationResponse';
import { Notification } from './notification';
export interface DevicesData<T> {
    players: Player<T>[];
}
export interface Player<T> {
    id: string;
    identifier: string;
    session_count: number;
    language: string;
    timezone: number;
    game_version: string;
    device_os: string;
    device_type: number;
    device_model: string;
    ad_id: string;
    tags: T;
    last_active: number;
    playtime: number;
    amount_spend: number;
    created_at: number;
    invalid_identifier: boolean;
    badge_count: number;
    sdk: string;
    test_type: any;
    ip: any;
}
export declare class GapiOneSignalClientService implements OneSignalClient {
    API_URI: string;
    app: any;
    apps: any;
    userAuthKey: string;
    constructor(credentials: GapiOneSignalConfig);
    basicRequest(url: string, apiKey: string, method: 'PUT' | 'POST' | 'GET' | 'DELETE', body: any): Promise<any>;
    setRootUrl(rootUrl: string): void;
    setApp(app: any): void;
    sendNotification(notification: Notification): Promise<SendNotificationResponse>;
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
    viewDevices<T>(query: {
        limit: number;
        offset: number;
    }): Promise<DevicesData<T>>;
    viewDevice(deviceId: string): Promise<any>;
    addDevice(body: any): Promise<any>;
    editDevice(deviceId: string, body: any): Promise<any>;
    trackOpen(notificationId: string, body: any): Promise<any>;
    csvExport(body: any): Promise<any>;
}
