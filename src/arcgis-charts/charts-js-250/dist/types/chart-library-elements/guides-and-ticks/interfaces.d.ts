import { ValueAxisDataItem, ValueAxis } from "@amcharts/amcharts4/charts";
import { WebChartAxis } from "@arcgis/charts-spec";
import { NumberFormatter } from "@amcharts/amcharts4/core";
export interface HistogramTickProps {
    axisTick: ValueAxisDataItem;
    value: number;
    axisConfig: WebChartAxis;
    numberFormatter: NumberFormatter;
}
export interface UpdateTicksProps {
    valueAxis: ValueAxis;
    axisConfig: WebChartAxis;
    ticks?: number[];
}
export declare const AxisDataItemType: {
    readonly Guides: "guides";
    readonly Ticks: "ticks";
};
export declare type AxisDataItemType = typeof AxisDataItemType[keyof typeof AxisDataItemType];