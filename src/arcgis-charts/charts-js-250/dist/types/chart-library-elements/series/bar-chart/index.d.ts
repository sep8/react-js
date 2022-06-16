import { ColumnSeries } from "@amcharts/amcharts4/charts";
import { InitializeBarSeriesProps, UpdateBarSeriesProps } from "./interfaces";
/**
 * Function initializing the bar chart series. Set only the properties that are not going to be modified
 * through a chart update. See updateBarChartSeries for the other properties.
 * @param props
 */
export declare function initializeBarChartSeries(props: InitializeBarSeriesProps): ColumnSeries;
/**
 * Function updating a column series properties without having to recreate the whole series.
 * @param props
 */
export declare function updateBarChartSeries(props: UpdateBarSeriesProps): Promise<void>;
