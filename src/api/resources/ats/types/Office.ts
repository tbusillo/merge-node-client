/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Office Object
 * ### Description
 * The `Office` object is used to represent an office within a company. A given `Job` has the `Office` ID in its offices field.
 * ### Usage Example
 * Fetch from the `LIST Offices` endpoint and view the offices within a company.
 */
export interface Office {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The office's name. */
    name?: string;
    /** The office's location. */
    location?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
