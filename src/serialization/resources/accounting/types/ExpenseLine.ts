/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ExpenseLine: core.serialization.ObjectSchema<
    serializers.accounting.ExpenseLine.Raw,
    Merge.accounting.ExpenseLine
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    item: core.serialization.lazy(async () => (await import("../../..")).accounting.ExpenseLineItem).optional(),
    netAmount: core.serialization.property("net_amount", core.serialization.number().optional()),
    trackingCategory: core.serialization.property(
        "tracking_category",
        core.serialization
            .lazy(async () => (await import("../../..")).accounting.ExpenseLineTrackingCategory)
            .optional()
    ),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.ExpenseLineTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    company: core.serialization.string().optional(),
    account: core.serialization.lazy(async () => (await import("../../..")).accounting.ExpenseLineAccount).optional(),
    contact: core.serialization.lazy(async () => (await import("../../..")).accounting.ExpenseLineContact).optional(),
    description: core.serialization.string().optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace ExpenseLine {
    interface Raw {
        remote_id?: string | null;
        item?: serializers.accounting.ExpenseLineItem.Raw | null;
        net_amount?: number | null;
        tracking_category?: serializers.accounting.ExpenseLineTrackingCategory.Raw | null;
        tracking_categories?:
            | (serializers.accounting.ExpenseLineTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        company?: string | null;
        account?: serializers.accounting.ExpenseLineAccount.Raw | null;
        contact?: serializers.accounting.ExpenseLineContact.Raw | null;
        description?: string | null;
        exchange_rate?: string | null;
        modified_at?: string | null;
    }
}
