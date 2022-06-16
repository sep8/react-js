import { XYChart, PieChart } from "@amcharts/amcharts4/charts";
/**
 * Handles a selection that couldn't be executed properly.
 * It aborts the pending queries, sends an event and clears the selection.
 * @param chart
 */
export declare function handleFailedSelection(chart: XYChart | PieChart): void;