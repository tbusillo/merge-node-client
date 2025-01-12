/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TransactionsListRequestExpand: core.serialization.Schema<
    serializers.accounting.TransactionsListRequestExpand.Raw,
    Merge.accounting.TransactionsListRequestExpand
> = core.serialization.enum_([
    "account",
    "contact",
    "contact,account",
    "line_items",
    "line_items,account",
    "line_items,contact",
    "line_items,contact,account",
    "line_items,tracking_categories",
    "line_items,tracking_categories,account",
    "line_items,tracking_categories,contact",
    "line_items,tracking_categories,contact,account",
    "tracking_categories",
    "tracking_categories,account",
    "tracking_categories,contact",
    "tracking_categories,contact,account",
]);

export declare namespace TransactionsListRequestExpand {
    type Raw =
        | "account"
        | "contact"
        | "contact,account"
        | "line_items"
        | "line_items,account"
        | "line_items,contact"
        | "line_items,contact,account"
        | "line_items,tracking_categories"
        | "line_items,tracking_categories,account"
        | "line_items,tracking_categories,contact"
        | "line_items,tracking_categories,contact,account"
        | "tracking_categories"
        | "tracking_categories,account"
        | "tracking_categories,contact"
        | "tracking_categories,contact,account";
}
