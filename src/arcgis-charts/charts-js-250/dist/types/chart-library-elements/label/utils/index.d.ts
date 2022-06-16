import { Chart } from "@amcharts/amcharts4/charts";
import { Label } from "@amcharts/amcharts4/core";
import { LabelType } from "./interfaces";
/**
 * Escape the brackets (i.e. [, ], {, } ) contained in a string by doubling them,
 * as per amCharts documentation: https://www.amcharts.com/docs/v4/concepts/formatters/formatting-strings/#Escaping
 * @param value
 */
export declare function escapeBrackets(value: string): string;
/**
 * Adjusts a label max width according to either a fixed size or its container's size
 * @param props.chart The chart
 * @param props.label The label to wrap
 * @param props.labelType The type of label, to decide what rule to apply
 */
export declare function autoAdjustLabelMaxWidthCallback(props: {
    chart: Chart;
    label: Label;
    labelType?: LabelType;
}): void;
/**
 * Allows a label to automatically adjusts its max width according to either a fixed size or its container's size
 * @param props.chart The chart
 * @param props.label The label to wrap
 * @param props.labelType The type of label, to decide what rule to apply
 */
export declare function autoAdjustLabelMaxWidth(props: {
    chart: Chart;
    label: Label;
    labelType?: LabelType;
}): void;
