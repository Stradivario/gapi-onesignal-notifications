import { Service } from "@gapi/core";
import { GapiOneSignalConfig } from "./onesignal.config";

@Service()
export class GapiOneSignalConfigService extends GapiOneSignalConfig {
    constructor() {
        super();
    }
}