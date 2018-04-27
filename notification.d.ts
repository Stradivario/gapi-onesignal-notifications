export declare class Notification {
    initialBody: any;
    private postBody;
    private allowed_fields;
    constructor(initialBody: any);
    setParameter(name: string, value: any): void;
    setContent(contents: any): void;
    setIncludedSegments(included_segments: string[]): void;
    setExcludedSegments(excluded_segments: string[]): void;
    setFilters(filters: any): void;
    setTargetDevices(include_player_ids: string[]): void;
}
