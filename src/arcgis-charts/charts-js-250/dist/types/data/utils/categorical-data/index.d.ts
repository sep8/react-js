import { WebChartDataItem, WebChartBarChartSeries, WebChartLineChartSeries } from "@arcgis/charts-spec";
import { CompleteDataWithMissingCategoriesProps } from "./interfaces";
/**
 * Completes a chart data by adding all the unique values not already in the array
 * @param props
 */
export declare function completeDataWithMissingCategories(props: CompleteDataWithMissingCategoriesProps): Promise<WebChartDataItem[]>;
/**
 * Completes a chart data by adding the missing series in every data item with a 0 value.
 * Example:
 * 3 series are defined (webChartSeries):
 *  - series 1: outStatisticFieldName = "series1y"
 *  - series 2: outStatisticFieldName = "series2y"
 *  - series 3: outStatisticFieldName = "series3y"
 * The data set (seriesData) does not contain data for the series 2:
 *  [{category1: "c1", series1y: 25, series3y: 11},
 *   {category1: "c2", series1y: 18, series3y: 36}]
 *
 * The function completes the data set as follow:
 *  [{category1: "c1", series1y: 25, series2y: 0, series3y: 11},
 *   {category1: "c2", series1y: 18, series2y: 0, series3y: 36}]
 * @param seriesData
 * @param webChartSeries
 */
export declare function completeDataWithEmptySeries(seriesData: WebChartDataItem[], webChartSeries: WebChartBarChartSeries[] | WebChartLineChartSeries[]): WebChartDataItem[];