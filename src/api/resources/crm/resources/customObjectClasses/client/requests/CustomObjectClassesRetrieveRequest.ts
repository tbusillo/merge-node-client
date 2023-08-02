/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CustomObjectClassesRetrieveRequest {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: "fields";
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
}