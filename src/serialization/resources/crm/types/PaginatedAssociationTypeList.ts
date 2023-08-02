/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedAssociationTypeList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedAssociationTypeList.Raw,
    Merge.crm.PaginatedAssociationTypeList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.AssociationType))
        .optional(),
});

export declare namespace PaginatedAssociationTypeList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.crm.AssociationType.Raw[] | null;
    }
}