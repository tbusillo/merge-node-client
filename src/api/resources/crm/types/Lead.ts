/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Lead Object
 * ### Description
 * The `Lead` object is used to represent an individual who is a potential customer.
 * ### Usage Example
 * TODO
 */
export interface Lead {
    /** The lead's owner. */
    owner?: Merge.crm.LeadOwner;
    /** The lead's source. */
    leadSource?: string;
    /** The lead's title. */
    title?: string;
    /** The lead's company. */
    company?: string;
    /** The lead's first name. */
    firstName?: string;
    /** The lead's last name. */
    lastName?: string;
    addresses?: Merge.crm.Address[];
    emailAddresses?: Merge.crm.EmailAddress[];
    phoneNumbers?: Merge.crm.PhoneNumber[];
    /** When the third party's lead was updated. */
    remoteUpdatedAt?: Date;
    /** When the third party's lead was created. */
    remoteCreatedAt?: Date;
    /** When the lead was converted. */
    convertedDate?: Date;
    /** The contact of the converted lead. */
    convertedContact?: Merge.crm.LeadConvertedContact;
    /** The account of the converted lead. */
    convertedAccount?: Merge.crm.LeadConvertedAccount;
    remoteWasDeleted?: boolean;
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}
