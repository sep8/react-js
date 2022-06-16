import { WebChartDataItemValue } from "@arcgis/charts-spec";
/**
 * Transform a couple key/value to where clause equivalent to 'key = value'.
 * It adds quotes around the value if it's not detected as a number.
 *
 * TODO: the value parameter is a `WebChartDataItemValue` but most of types from that union wouldn't be
 * accepted in a SQL where clause. It might be more needed to specify more strict types.
 * @param key
 * @param value
 */
export declare function objectToWhereQuery(key: string, value: WebChartDataItemValue): string;