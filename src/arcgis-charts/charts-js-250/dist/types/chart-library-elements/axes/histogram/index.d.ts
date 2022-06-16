import { UpdateHistogramAxesProps, InitializeHistogramAxesProps } from "./interfaces";
export declare function initializeHistogramAxes(props: InitializeHistogramAxesProps): void;
/**
 * Function to update the horizontal and vertical axes of the histogram
 * During the update stage some axes may have gotten re-initialized,
 * so in those cases, we will need to add event listeners again.
 * Listener listens to change in axis size and show/hide labels
 * accordingly.
 * @param props
 */
export declare function updateHistogramAxes(props: UpdateHistogramAxesProps): void;