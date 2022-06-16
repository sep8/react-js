import { XYChart, XYCursor, PieChart, GaugeChart, AxisRendererX, Axis, AxisRendererY } from "@amcharts/amcharts4/charts";
import { WebChartCursorCrosshair } from "@arcgis/charts-spec";
import { ActionModes } from "@arcgis/charts-shared-utils";
import { IStyleProperty } from "@amcharts/amcharts4/core";
/**
 * Creates cursor on the chart if its compatible
 * Only for XYChart
 * @param chart
 */
export declare function initializeChartCursor(chart: XYChart | PieChart | GaugeChart): void;
/**
 * Updates the style and visibility of the cursor's crosshair.
 * @param chart
 * @param cursorCrosshair
 */
export declare function updateChartCursor(chart: XYChart | PieChart | GaugeChart, cursorCrosshair?: WebChartCursorCrosshair): void;
/**
 * Returns the chart's cursor. Initializes a new one if it's not been set yet.
 * Only for XYChart
 * @param chart
 */
export declare function getChartCursor(chart: XYChart | GaugeChart): XYCursor;
/**
 * Enables or disables the mouse pointer on the axis label, if they have a callback function set
 * on the "hit" event
 * @param axis axis used for applying the cursor style on its labels
 * @param mouseCursorStyle mouseCursorStyle Cursor style to apply on hovering the axis labels
 */
export declare function toggleMousePointerOnAxisLabels(axis: Axis<AxisRendererX | AxisRendererY>, mouseCursorStyle: IStyleProperty[]): void;
/**
 * Updates the chart cursor behavior, by either using the requested mode or by applying the current one updated with the rotation
 */
export declare function updateChartCursorBehavior(chart: XYChart | PieChart | GaugeChart, actionMode?: ActionModes): void;