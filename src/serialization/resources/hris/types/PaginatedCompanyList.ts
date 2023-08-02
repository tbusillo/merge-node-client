/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedCompanyList: core.serialization.ObjectSchema<
    serializers.hris.PaginatedCompanyList.Raw,
    Merge.hris.PaginatedCompanyList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.Company))
        .optional(),
});

export declare namespace PaginatedCompanyList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.hris.Company.Raw[] | null;
    }
}