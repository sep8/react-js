import { Series } from "@amcharts/amcharts4/charts";
import { WebChartTypes, WebChartStackedKinds } from "@arcgis/charts-spec";
import { Label } from "@amcharts/amcharts4/core";
import { BarAndLineDataLabelFormatCallback } from "../../../interfaces";
import { DataLabelUpdateProps, DefaultDataLabelFormatterProps } from "./interfaces";
/**
 * Function handling the display of data labels for bar, line and histogram.
 * The label should be hidden when it is outside of the plot container, and vice versa.
 * @param seriesType The series type, to apply the function only to the appropriate series
 * @param dataLabel The label to hide or show
 */
export declare function adjustLabelVisibility(seriesType: WebChartTypes, dataLabel?: Label): void;
/**
 * Function handling the case of columns or markers having negative values. Only for bar and line charts.
 * When the chart is not rotated, the labels are moved down. If the chart is rotated they are moved to the left.
 * @param seriesType The series type, to apply the function only to the appropriate series
 * @param dataLabel The label to position
 */
export declare function adjustPositionForNegativeValues(seriesType: WebChartTypes, dataLabel?: Label): void;
/**
 * Function working in pair with the adapter set by `updateDataLabel()`.
 * We force here the dataLabel to refresh, which triggers the
 * adapter on `textOuput`, allowing the display rules to kick in.
 * @param series The series containing the data labels to refresh
 */
export declare function refreshSeriesDataLabels(series: Series): void;
/**
 * Determine whether the input data value should be shown.
 * @param dataValue
 * @param series
 * @param seriesType
 * @param stackedType
 * @param axisMin
 */
export declare function shouldHideDataLabel(props: {
    dataValue?: number;
    series: Series;
    seriesType: WebChartTypes;
    stackedType?: WebChartStackedKinds;
    axisMin?: number;
}): boolean;
/**
 * Finds a data label defined on the series bullets.
 * @param series The series to look into
 * @param where Where to look in the series. Can be either in the bullets or the columns.
 */
export declare function findSeriesDataLabel(series: Series, where: "bullets" | "columns"): Label | undefined;
/**
 * Adds a label formatter on a bar or line series.
 * @param dataLabel The label to format
 * @param series The series associated to the label
 */
export declare function addBarOrLineSeriesDataLabelFormatter(dataLabel: Label, series: Series): void;
/**
 * Generates a default callback function used to format the bar or line series data labels.
 * The callback:
 *   - formats the received number using the value formatter
 *   - attaches the inline CSS information to the label
 * @param props Set of properties necessary to generate the default formatter
 */
export declare function generateBarOrLineSeriesDefaultDataLabelFormatter(props: DefaultDataLabelFormatterProps): BarAndLineDataLabelFormatCallback;
/**
 * Generic function to update a series data labels.
 * This function contains common code for all the XY Charts. The specific code for each chart
 * is to find in the `update<chart type>DataLabel()` functions
 * @param props Set of properties necessary to update the data label
 */
export declare function updateDataLabel(props: DataLabelUpdateProps): void;
