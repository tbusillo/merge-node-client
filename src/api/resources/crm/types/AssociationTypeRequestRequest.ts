/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface AssociationTypeRequestRequest {
    sourceObjectClass: Merge.crm.ObjectClassDescriptionRequest;
    targetObjectClasses: Merge.crm.ObjectClassDescriptionRequest[];
    /** <span style="white-space: nowrap">`non-empty`</span> */
    remoteKeyName: string;
    /** <span style="white-space: nowrap">`non-empty`</span> */
    displayName?: string;
    cardinality?: Merge.crm.CardinalityEnum;
    isRequired?: boolean;
}
