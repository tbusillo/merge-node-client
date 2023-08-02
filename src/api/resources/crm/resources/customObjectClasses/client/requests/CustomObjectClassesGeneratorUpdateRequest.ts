/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CustomObjectClassesGeneratorUpdateRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
}