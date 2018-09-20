import { SendNotificationResponse } from "./notificationResponse";
export interface OneSignalClient {
    setRootUrl(rootUrl: string): void;
    setApp(app: any): void;
    sendNotification(notification: any, callback?: any): Promise<SendNotificationResponse>;
    cancelNotification(notificationId: any, callback: any): Promise<any>;
    viewNotification(notificationId: any, callback: any): Promise<any>;
    viewNotifications(query: any, callback: any): Promise<any>;
    viewApps(callback: any): Promise<any>;
    viewApp(appId: any, callback: any): Promise<any>;
    createApp(body: any, callback: any): Promise<any>;
    updateApp(body: any, callback: any): Promise<any>;
    viewDevices(query: any, callback: any): Promise<any>;
    viewDevice(deviceId: any, callback: any): Promise<any>;
    addDevice(body: any, callback: any): Promise<any>;
    editDevice(deviceId: any, body: any, callback: any): Promise<any>;
    trackOpen(notificationId: any, body: any, callback: any): Promise<any>;
    csvExport(body: any, callback: any): Promise<any>;
}
