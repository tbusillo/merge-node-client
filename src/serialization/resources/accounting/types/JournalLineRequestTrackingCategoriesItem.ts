/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalLineRequestTrackingCategoriesItem: core.serialization.Schema<
    serializers.accounting.JournalLineRequestTrackingCategoriesItem.Raw,
    Merge.accounting.JournalLineRequestTrackingCategoriesItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.TrackingCategory),
]);

export declare namespace JournalLineRequestTrackingCategoriesItem {
    type Raw = string | serializers.accounting.TrackingCategory.Raw;
}
