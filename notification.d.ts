export interface PostBody {
    contents: {
        [key: string]: string;
    };
    data: any;
    content_available: any;
    template_id: any;
    included_segments: any;
    excluded_segments: any;
    filters: any;
    app_ids: any;
    app_id: any;
    include_player_ids: string[];
}
export declare class Notification {
    initialBody: {
        contents?: any;
        content_available?: any;
        template_id?: any;
    };
    postBody: PostBody;
    allowed_fields: string[];
    constructor(initialBody: {
        contents?: any;
        content_available?: any;
        template_id?: any;
    });
    setParameter(name: string, value: any): void;
    setContent(contents: any): this;
    setIncludedSegments<T>(included_segments: T[]): this;
    setExcludedSegments<T>(excluded_segments: string[]): this;
    setFilters(filters: any): this;
    setTargetDevices(include_player_ids: string[]): this;
}
