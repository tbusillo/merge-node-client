/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The PhoneNumber Object
 * ### Description
 * The `PhoneNumber` object is used to represent an entity's phone number.
 * ### Usage Example
 * Fetch from the `GET Contact` endpoint and view their phone numbers.
 */
export interface PhoneNumber {
    /** The phone number. */
    phoneNumber?: string;
    /** The phone number's type. */
    phoneNumberType?: string;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
}
