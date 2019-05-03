import { SendNotificationDataResponse } from "./notificationDataResponse";
import { TLSSocket } from 'tls';
import { Domain } from 'domain';
import { ClientRequest } from 'http';

export interface SendNotificationHttpResponse {
    _consuming: boolean;
    _dumped: boolean;
    _events: any;
    _eventsCount: number;
    _maxListeners: number;
    _readableState: any;
    body: SendNotificationDataResponse;
    caseless: {dict: Object};
    client: TLSSocket;
    complete: true;
    connection: TLSSocket;
    destroyed: boolean;
    domain: Domain;
    headers: Object;
    httpVersion: string;
    httpVersionMajor: number;
    httpVersionMinor: number;
    method: any;
    rawHeaders: Array<{[key: string]: string}>;
    rawTrailers: Array<any>;
    read: Function;
    readable: boolean;
    req: ClientRequest;
    request: Request;
    socket: TLSSocket;
    statusCode: number;
    statusMessage: string;
    toJSON: Function;
    trailers: Object;
    upgrade: boolean;
    url: string;
}
