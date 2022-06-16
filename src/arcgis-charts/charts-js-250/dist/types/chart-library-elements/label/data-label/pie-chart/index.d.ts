import { PieSeries } from "@amcharts/amcharts4/charts";
import { WebChartPieChartSeries } from "@arcgis/charts-spec";
import { PieChartLabelFormatCallback } from "../../../../interfaces";
/**
 * Initializes default properties to a pie series data labels
 * @param pieSeries
 */
export declare function initializePieChartDataLabel(pieSeries: PieSeries): void;
/**
 * Handles how the data labels are rendered on a pie chart.
 * Uses from the configuration:
 *   - the numeric format defined at the series level
 *   - the percentage format defined at the series level
 * If a format callback is passed, we'll use it over the default data label formatting.
 * @param props.pieSeries The series containing the data label
 * @param props.seriesConfig The config for the series
 * @param props.dataLabelFormatter A callback function passed down by the consumer to format the data labels as they want
 */
export declare function updatePieChartDataLabel(props: {
    pieSeries: PieSeries;
    seriesConfig: WebChartPieChartSeries;
    dataLabelFormatter?: PieChartLabelFormatCallback;
}): void;