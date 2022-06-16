import { Label } from "@amcharts/amcharts4/core";
import { Series } from "@amcharts/amcharts4/charts";
import { DataLabelUpdateProps } from "../interfaces";
/**
 * Creates the data labels on a line series
 * @param series The series on which to initialize the data label
 */
export declare function initializeLineSeriesDataLabel(series: Series): Label;
/**
 * Updates a line series data labels style and format.
 * @param props Set of properties necessary to update the data label
 */
export declare function updateLineSeriesDataLabel(props: DataLabelUpdateProps): void;
