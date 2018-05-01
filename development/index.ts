

import { GapiModule, Container, Token, GapiModuleWithServices } from "@gapi/core";
import { GapiOneSignalClientService } from './client';
import { GapiOneSignalConfig } from "./onesignal.config";

@GapiModule()
export class GapiOneSignalModule {
    static forRoot(config: GapiOneSignalConfig): GapiModuleWithServices {
        Container.set(GapiOneSignalClientService, new GapiOneSignalClientService(config));
        return {
            gapiModule: GapiOneSignalModule,
            services: []
        };
    }
}

export * from './notification';
export * from './client';
export * from './interfaces/index';