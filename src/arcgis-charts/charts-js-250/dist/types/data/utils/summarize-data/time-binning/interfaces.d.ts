import { TimeIntervalInfo, WebChartDataItem, WebChartTimeIntervalUnits } from "@arcgis/charts-spec";
export interface DateRange {
    dateMinTimestamp: number;
    dateMaxTimestamp: number;
}
export interface IntervalUnitHelper {
    unit: WebChartTimeIntervalUnits;
    threshold: number;
    unitMs: number;
    preferredIntervalSize: number[];
}
export declare const timeUnitHelper: IntervalUnitHelper[];
export interface TimeBinningStatistics {
    dateRange: DateRange;
    numberOfFeatures: number;
}
export interface BinnedServerData {
    data: WebChartDataItem[];
    timeBinningStats: TimeBinningStatistics;
}
export interface GroupProps {
    binFirstOrLastIndex: number;
    data: WebChartDataItem[];
    x: string;
    timeIntervalInfo: TimeIntervalInfo;
    newDateMin: number;
    newDateMax: number;
}
export declare const groupByWhenCaseForMedianTimeBinning = "${ groupByFieldsForStatistics } WHEN ${ dateField } >= '${ startDate }' AND ${ dateField } ${ endDateOperand } '${ endDate }' THEN '${ y }|${ binIndex}'";