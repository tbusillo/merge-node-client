/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The Drive Object
 * ### Description
 * The `Drive` object is used to represent a drive that contains the folders and files in the user's workspace.
 * ### Usage Example
 * Fetch from the `GET /api/filestorage/v1/drives` endpoint and view their drives.
 */
export interface Drive {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The drive's name. */
    name?: string;
    /** When the third party's drive was created. */
    remoteCreatedAt?: Date;
    /** The drive's url. */
    driveUrl?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
