/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Tax Object
 * ### Description
 * The `Tax` object is used to represent an array of the tax deductions for a given employee's payroll run.
 *
 * ### Usage Example
 * Fetch from the `LIST Taxes` endpoint and filter by `ID` to show all taxes.
 */
export interface Tax {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    employeePayrollRun?: string;
    /** The tax's name. */
    name?: string;
    /** The tax amount. */
    amount?: number;
    /** Whether or not the employer is responsible for paying the tax. */
    employerTax?: boolean;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
