/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Department Object
 * ### Description
 * The `Department` object is used to represent a department within a company.
 * ### Usage Example
 * Fetch from the `LIST Departments` endpoint and view the departments within a company.
 */
export interface Department {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The department's name. */
    name?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}