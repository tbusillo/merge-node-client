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
    item: core.serialization.string().optional(),
    netAmount: core.serialization.property("net_amount", core.serialization.number().optional()),
    trackingCategory: core.serialization.property("tracking_category", core.serialization.string().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(core.serialization.string().optional()).optional()
    ),
    company: core.serialization.string().optional(),
    account: core.serialization.string().optional(),
    contact: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
});

export declare namespace ExpenseLine {
    interface Raw {
        remote_id?: string | null;
        item?: string | null;
        net_amount?: number | null;
        tracking_category?: string | null;
        tracking_categories?: (string | null | undefined)[] | null;
        company?: string | null;
        account?: string | null;
        contact?: string | null;
        description?: string | null;
        exchange_rate?: string | null;
        modified_at?: string | null;
    }
}