import { GaugeChart, PieChart, XYChart } from "@amcharts/amcharts4/charts";
/**
 * Indicates whether the chart's container is currently visible
 * @param chartContainer
 */
export declare function isChartContainerVisible(chartContainer?: HTMLElement): boolean;
/**
 * Adds an handler on the chart's container visibility.
 * When the chart is created or updated while its container is hidden, it creates rendering issues (See issues #2806 & #2737).
 * The handler helps re-rendering the chart when the container shows up.
 * @param chart
 * @param chartContainer
 */
export declare function addChartContainerVisibilityChangeHandler(chart: XYChart | PieChart | GaugeChart, chartContainer?: HTMLElement): void;
/**
 * Update XYChart containers' paddings when the chart is rotated or when position of the legend changes.
 * Also adds extra padding to the right of the chart's plotting area when the chart:
 *  - is rotated
 *  - had data labels displayed
 *  - is either a side-by-side bar chart, a line chart or combo chart (with any stacked type)
 *
 * After all the series are validated, its associated containers' paddings will be automatically adjusted.
 * @param chart The chart on which to apply the padding
 */
export declare function updateChartContainersPaddings(chart: XYChart | PieChart | GaugeChart): void;