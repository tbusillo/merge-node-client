/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TransactionLineItemItem: core.serialization.Schema<
    serializers.accounting.TransactionLineItemItem.Raw,
    Merge.accounting.TransactionLineItemItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.Item),
]);

export declare namespace TransactionLineItemItem {
    type Raw = string | serializers.accounting.Item.Raw;
}
