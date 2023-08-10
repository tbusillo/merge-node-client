/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The Tag Object
 * ### Description
 * The `Tag` object is used to represent a tag for a candidate.
 * ### Usage Example
 * Fetch from the `LIST Tags` endpoint and view the tags used within a company.
 */
export interface Tag {
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The tag's name. */
    name?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
