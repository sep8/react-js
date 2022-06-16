import { Container, Label } from "@amcharts/amcharts4/core";
import { SerialChart } from "@amcharts/amcharts4/charts";
export declare function initializeContainer(defaults?: Partial<Container>, parent?: Container): Container;
export declare function updateContainer(container: Container, disabled: boolean): void;
/**
 * Places a container inside a parent comtainer in the specified order
 * @param container
 * @param back indicates where to place the container; in the `back` or in the `front`
 */
export declare function placeContainer(container: Container, back?: boolean): void;
/**
 * Set default paddings for chart containers
 * @param chart
 */
export declare function initializeChartContainersPaddings(chart: SerialChart): void;
/**
 * Every time the legend title is updated (hidden/shown, split into multiple lines due to window size), or its parent -
 * the legend's position changed, paddings of the associated chart containers will be recalculated and updated accordingly.
 * @param chart The chart
 * @param legendTitle The legend title
 */
export declare function autoAdjustContainersPaddingAccordingToLegendPosition(chart: SerialChart, legendTitle: Label): void;