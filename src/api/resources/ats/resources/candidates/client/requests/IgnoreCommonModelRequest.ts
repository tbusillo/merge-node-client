/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

export interface IgnoreCommonModelRequest {
    reason: Merge.ats.ReasonEnum;
    /** <span style="white-space: nowrap">`non-empty`</span> <span style="white-space: nowrap">`<= 256 characters`</span> */
    message?: string;
}
