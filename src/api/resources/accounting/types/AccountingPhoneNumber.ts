/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The AccountingPhoneNumber Object
 * ### Description
 * The `AccountingPhoneNumber` object is used to represent a contact's or company's phone number.
 *
 * ### Usage Example
 * Fetch from the `GET CompanyInfo` endpoint and view the company's phone numbers.
 */
export interface AccountingPhoneNumber {
    /** The phone number. */
    number?: string;
    /** The phone number's type. */
    type?: string;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
}
