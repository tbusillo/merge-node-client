/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ExpenseRequest: core.serialization.ObjectSchema<
    serializers.accounting.ExpenseRequest.Raw,
    Merge.accounting.ExpenseRequest
> = core.serialization.object({
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    account: core.serialization
        .lazy(async () => (await import("../../..")).accounting.ExpenseRequestAccount)
        .optional(),
    contact: core.serialization
        .lazy(async () => (await import("../../..")).accounting.ExpenseRequestContact)
        .optional(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.ExpenseRequestCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    company: core.serialization
        .lazy(async () => (await import("../../..")).accounting.ExpenseRequestCompany)
        .optional(),
    memo: core.serialization.string().optional(),
    lines: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.ExpenseLineRequest))
        .optional(),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.ExpenseRequestTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace ExpenseRequest {
    interface Raw {
        transaction_date?: string | null;
        account?: serializers.accounting.ExpenseRequestAccount.Raw | null;
        contact?: serializers.accounting.ExpenseRequestContact.Raw | null;
        total_amount?: number | null;
        currency?: serializers.accounting.ExpenseRequestCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: serializers.accounting.ExpenseRequestCompany.Raw | null;
        memo?: string | null;
        lines?: serializers.accounting.ExpenseLineRequest.Raw[] | null;
        tracking_categories?:
            | (serializers.accounting.ExpenseRequestTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
