/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The EmployerBenefit Object
 * ### Description
 * The `Employer Benefit` object is used to represent a benefit plan offered by a company.
 *
 * ### Usage Example
 * Fetch from the `LIST EmployerBenefits` endpoint and filter by `ID` to show all EmployerBenefits.
 */
export interface EmployerBenefit {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /**
     * The type of benefit plan.
     *
     * * `MEDICAL` - MEDICAL
     * * `HEALTH_SAVINGS` - HEALTH_SAVINGS
     * * `INSURANCE` - INSURANCE
     * * `RETIREMENT` - RETIREMENT
     * * `OTHER` - OTHER
     */
    benefitPlanType?: Merge.hris.EmployerBenefitBenefitPlanType;
    /** The employer benefit's name - typically the carrier or network name. */
    name?: string;
    /** The employer benefit's description. */
    description?: string;
    /** The employer benefit's deduction code. */
    deductionCode?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
