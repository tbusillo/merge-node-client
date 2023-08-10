/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaymentTrackingCategoriesItem: core.serialization.Schema<
    serializers.accounting.PaymentTrackingCategoriesItem.Raw,
    Merge.accounting.PaymentTrackingCategoriesItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.TrackingCategory),
]);

export declare namespace PaymentTrackingCategoriesItem {
    type Raw = string | serializers.accounting.TrackingCategory.Raw;
}
