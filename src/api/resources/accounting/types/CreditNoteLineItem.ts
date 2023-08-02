/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreditNoteLineItem {
    item?: string;
    /** The credit note line item's name. */
    name?: string;
    /** The description of the item that is owed. */
    description?: string;
    /** The credit note line item's quantity. */
    quantity?: string;
    /** The credit note line item's memo. */
    memo?: string;
    /** The credit note line item's unit price. */
    unitPrice?: string;
    /** The credit note line item's tax rate. */
    taxRate?: string;
    /** The credit note line item's total. */
    totalLineAmount?: string;
    /** The credit note line item's associated tracking category. */
    trackingCategory?: string;
    /** The credit note line item's associated tracking categories. */
    trackingCategories: string[];
    /** The credit note line item's account. */
    account?: string;
    /** The company the credit note belongs to. */
    company?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
}