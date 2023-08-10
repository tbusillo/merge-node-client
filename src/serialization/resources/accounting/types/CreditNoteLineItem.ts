/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CreditNoteLineItem: core.serialization.ObjectSchema<
    serializers.accounting.CreditNoteLineItem.Raw,
    Merge.accounting.CreditNoteLineItem
> = core.serialization.object({
    item: core.serialization.lazy(async () => (await import("../../..")).accounting.CreditNoteLineItemItem).optional(),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    quantity: core.serialization.string().optional(),
    memo: core.serialization.string().optional(),
    unitPrice: core.serialization.property("unit_price", core.serialization.string().optional()),
    taxRate: core.serialization.property("tax_rate", core.serialization.string().optional()),
    totalLineAmount: core.serialization.property("total_line_amount", core.serialization.string().optional()),
    trackingCategory: core.serialization.property("tracking_category", core.serialization.string().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(core.serialization.string())
    ),
    account: core.serialization.string().optional(),
    company: core.serialization
        .lazy(async () => (await import("../../..")).accounting.CreditNoteLineItemCompany)
        .optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace CreditNoteLineItem {
    interface Raw {
        item?: serializers.accounting.CreditNoteLineItemItem.Raw | null;
        name?: string | null;
        description?: string | null;
        quantity?: string | null;
        memo?: string | null;
        unit_price?: string | null;
        tax_rate?: string | null;
        total_line_amount?: string | null;
        tracking_category?: string | null;
        tracking_categories: string[];
        account?: string | null;
        company?: serializers.accounting.CreditNoteLineItemCompany.Raw | null;
        remote_id?: string | null;
        modified_at?: string | null;
    }
}
