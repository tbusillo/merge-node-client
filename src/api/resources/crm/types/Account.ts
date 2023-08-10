/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Account Object
 * ### Description
 * The `Account` object is used to represent a company in a CRM system.
 * ### Usage Example
 * TODO
 */
export interface Account {
    /** The account's owner. */
    owner?: Merge.crm.AccountOwner;
    /** The account's name. */
    name?: string;
    /** The account's description. */
    description?: string;
    /** The account's industry. */
    industry?: string;
    /** The account's website. */
    website?: string;
    /** The account's number of employees. */
    numberOfEmployees?: number;
    addresses?: Merge.crm.Address[];
    phoneNumbers?: Merge.crm.PhoneNumber[];
    /** The last date (either most recent or furthest in the future) of when an activity occurs in an account. */
    lastActivityAt?: Date;
    /** When the CRM system account data was last modified by a user with a login. */
    remoteUpdatedAt?: Date;
    /** When the third party's account was created. */
    remoteCreatedAt?: Date;
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
