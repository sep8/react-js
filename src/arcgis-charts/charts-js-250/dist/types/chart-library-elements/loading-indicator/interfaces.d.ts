import { Container, Polygon, Button } from "@amcharts/amcharts4/core";
export interface LoaderElements {
    loaderPolygon: Polygon;
    loaderContainer: Container;
    closeLoaderButton: Button;
}
export interface LoaderHandle {
    showLoader: () => void;
    hideLoader: () => void;
}