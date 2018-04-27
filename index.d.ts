import { GapiOneSignalConfig } from "./onesignal.config";
export declare class GapiOneSignalModule {
    static forRoot(config: GapiOneSignalConfig): typeof GapiOneSignalModule;
}
export * from './notification';
export * from './client';
export * from './interfaces/index';
