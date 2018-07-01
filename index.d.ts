import { ModuleWithServices } from "@rxdi/core";
import { OneSignalConfig } from "./onesignal.config";
export declare class OneSignalModule {
    static forRoot(config: OneSignalConfig): ModuleWithServices;
}
export * from './notification';
export * from './client';
export * from './interfaces/index';
