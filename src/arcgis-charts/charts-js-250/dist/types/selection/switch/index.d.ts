import { ColumnSeries, LineSeries, PieChart, PieSeries, XYChart } from "@amcharts/amcharts4/charts";
import { Sprite, ListTemplate } from "@amcharts/amcharts4/core";
import { ElementSelectionProps } from "../interface";
/**
 * Switches the active property of all the elements from the list, and apply the corresponding state on them.
 * @param elements The list of elements (Sprite) we want to switch
 * @param chart
 */
export declare function switchElementsSelectionState(elements: ListTemplate<Sprite>, chart: XYChart | PieChart): Sprite[];
/**
 * Inverses the selection of the columns.
 * @param series
 * @param seriesIndex
 */
export declare function switchColumnSelectionFromSeries(series: ColumnSeries, seriesIndex: number): ElementSelectionProps[];
/**
 * Inverses all the selected data points in a line series or scatter plot.
 * @param series
 * @param seriesIndex
 */
export declare function switchSelectedMarkersFromSeries(series: LineSeries, seriesIndex: number): ElementSelectionProps[];
/**
 * Inverses all the selected slices in a pie series.
 * @param series
 */
export declare function switchSelectedSlicesFromPieSeries(series: PieSeries): ElementSelectionProps[];