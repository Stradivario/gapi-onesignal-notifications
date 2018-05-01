

import { GapiModule, Container, Token, GapiModuleWithServices } from "@gapi/core";
import { GapiOneSignalClientService } from './client';
import { GapiOneSignalConfig } from "./onesignal.config";

@GapiModule()
export class GapiOneSignalModule {
    static forRoot(config: GapiOneSignalConfig): GapiModuleWithServices {
        return {
            gapiModule: GapiOneSignalModule,
            services: [
                {
                    provide: GapiOneSignalClientService,
                    useValue: new GapiOneSignalClientService(config)
                }
            ]
        };
    }
}

export * from './notification';
export * from './client';
export * from './interfaces/index';