/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TrackingCategoryCompany: core.serialization.Schema<
    serializers.accounting.TrackingCategoryCompany.Raw,
    Merge.accounting.TrackingCategoryCompany
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.CompanyInfo),
]);

export declare namespace TrackingCategoryCompany {
    type Raw = string | serializers.accounting.CompanyInfo.Raw;
}