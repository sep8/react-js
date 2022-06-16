import { Axis, AxisLabel, AxisLabelCircular, AxisRenderer, AxisRendererCircular } from "@amcharts/amcharts4/charts";
import { RESTSymbolType, WebChartText } from "@arcgis/charts-spec";
/**
 * Initializes a guide label
 * @param axis The axis containing the guide
 * @param isGuide Indicating whether the axis data item is created for a guide
 */
export declare function initializeGuideLabel(axis: Axis<AxisRenderer | AxisRendererCircular>, isGuide: boolean): AxisLabel | AxisLabelCircular;
/**
 * Updates guide label
 * @param props.label AxisLabel or AxisLabelCircular instance
 * @param props.labelConfig The guide's label config
 * @param guideType Indicating whether the guide is a surface or a line
 */
export declare function updateGuideLabel(props: {
    label: AxisLabel;
    labelConfig?: WebChartText;
    guideType: RESTSymbolType;
}): void;