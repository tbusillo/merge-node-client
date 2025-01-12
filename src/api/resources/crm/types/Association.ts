/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Association Object
 * ### Description
 * The `Association` record refers to an instance of an Association Type.
 * ### Usage Example
 * TODO
 */
export interface Association {
    sourceObject?: Record<string, unknown>;
    targetObject?: Record<string, unknown>;
    associationType?: Merge.crm.AssociationAssociationType;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
}
