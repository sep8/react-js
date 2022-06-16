export declare const CursorBehavior: {
    readonly SelectXY: "selectXY";
    readonly SelectX: "selectX";
    readonly SelectY: "selectY";
    readonly ZoomXY: "zoomXY";
    readonly ZoomX: "zoomX";
    readonly ZoomY: "zoomY";
    readonly None: "none";
};
export declare type CursorBehavior = typeof CursorBehavior[keyof typeof CursorBehavior];