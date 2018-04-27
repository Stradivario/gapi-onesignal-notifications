

import { GapiModule, Container, Token } from "@gapi/core";
import { GapiOneSignalClientService } from './client';
import { GapiOneSignalConfig } from "./onesignal.config";
import { GapiOneSignalConfigService } from "./onesignal.config.service";

@GapiModule({
    services: [GapiOneSignalConfigService]
})
export class GapiOneSignalModule {
    static forRoot(config: GapiOneSignalConfig) {
        Container.set(GapiOneSignalClientService, new GapiOneSignalClientService(config));
        return GapiOneSignalModule;
    }
}

export * from './notification';
export * from './client';
export * from './interfaces/index';