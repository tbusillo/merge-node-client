/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface PaginatedUserList {
    next?: string;
    previous?: string;
    results?: Merge.filestorage.User[];
}