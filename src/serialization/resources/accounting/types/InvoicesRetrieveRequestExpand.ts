/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const InvoicesRetrieveRequestExpand: core.serialization.Schema<
    serializers.accounting.InvoicesRetrieveRequestExpand.Raw,
    Merge.accounting.InvoicesRetrieveRequestExpand
> = core.serialization.enum_([
    "company",
    "contact",
    "contact,company",
    "line_items",
    "line_items,company",
    "line_items,contact",
    "line_items,contact,company",
    "line_items,tracking_categories",
    "line_items,tracking_categories,company",
    "line_items,tracking_categories,contact",
    "line_items,tracking_categories,contact,company",
    "payments",
    "payments,company",
    "payments,contact",
    "payments,contact,company",
    "payments,line_items",
    "payments,line_items,company",
    "payments,line_items,contact",
    "payments,line_items,contact,company",
    "payments,line_items,tracking_categories",
    "payments,line_items,tracking_categories,company",
    "payments,line_items,tracking_categories,contact",
    "payments,line_items,tracking_categories,contact,company",
    "payments,tracking_categories",
    "payments,tracking_categories,company",
    "payments,tracking_categories,contact",
    "payments,tracking_categories,contact,company",
    "tracking_categories",
    "tracking_categories,company",
    "tracking_categories,contact",
    "tracking_categories,contact,company",
]);

export declare namespace InvoicesRetrieveRequestExpand {
    type Raw =
        | "company"
        | "contact"
        | "contact,company"
        | "line_items"
        | "line_items,company"
        | "line_items,contact"
        | "line_items,contact,company"
        | "line_items,tracking_categories"
        | "line_items,tracking_categories,company"
        | "line_items,tracking_categories,contact"
        | "line_items,tracking_categories,contact,company"
        | "payments"
        | "payments,company"
        | "payments,contact"
        | "payments,contact,company"
        | "payments,line_items"
        | "payments,line_items,company"
        | "payments,line_items,contact"
        | "payments,line_items,contact,company"
        | "payments,line_items,tracking_categories"
        | "payments,line_items,tracking_categories,company"
        | "payments,line_items,tracking_categories,contact"
        | "payments,line_items,tracking_categories,contact,company"
        | "payments,tracking_categories"
        | "payments,tracking_categories,company"
        | "payments,tracking_categories,contact"
        | "payments,tracking_categories,contact,company"
        | "tracking_categories"
        | "tracking_categories,company"
        | "tracking_categories,contact"
        | "tracking_categories,contact,company";
}
