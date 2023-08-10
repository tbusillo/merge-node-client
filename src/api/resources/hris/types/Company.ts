/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Company Object
 * ### Description
 * The `Company` object is used to represent a company within the HRIS / Payroll system.
 *
 * ### Usage Example
 * Fetch from the `LIST Companies` endpoint and filter by `ID` to show all companies.
 */
export interface Company {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The company's legal name. */
    legalName?: string;
    /** The company's display name. */
    displayName?: string;
    /** The company's Employer Identification Numbers. */
    eins?: (string | undefined)[];
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
