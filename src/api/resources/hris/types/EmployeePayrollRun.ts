/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The EmployeePayrollRun Object
 * ### Description
 * The `EmployeePayrollRun` object is used to represent an employee's pay statement for a specific payroll run.
 *
 * ### Usage Example
 * Fetch from the `LIST EmployeePayrollRun` endpoint and filter by `ID` to show all employee payroll runs.
 */
export interface EmployeePayrollRun {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The employee whose payroll is being run. */
    employee?: Merge.hris.EmployeePayrollRunEmployee;
    /** The payroll being run. */
    payrollRun?: Merge.hris.EmployeePayrollRunPayrollRun;
    /** The total earnings throughout a given period for an employee before any deductions are made. */
    grossPay?: number;
    /** The take-home pay throughout a given period for an employee after deductions are made. */
    netPay?: number;
    /** The day and time the payroll run started. */
    startDate?: Date;
    /** The day and time the payroll run ended. */
    endDate?: Date;
    /** The day and time the payroll run was checked. */
    checkDate?: Date;
    earnings?: Merge.hris.Earning[];
    deductions?: Merge.hris.Deduction[];
    taxes?: Merge.hris.Tax[];
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
