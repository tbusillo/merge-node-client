/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface CommonModelScopesBodyRequest {
    /** <span style="white-space: nowrap">`non-empty`</span> */
    modelId: string;
    enabledActions: Merge.ats.EnabledActionsEnum[];
    disabledFields: string[];
}
