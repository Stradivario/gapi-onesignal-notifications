export declare class Notification {
    initialBody: {
        contents?: any;
        content_available?: any;
        template_id?: any;
    };
    private postBody;
    private allowed_fields;
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
