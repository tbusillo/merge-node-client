/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalEntryRequest: core.serialization.ObjectSchema<
    serializers.accounting.JournalEntryRequest.Raw,
    Merge.accounting.JournalEntryRequest
> = core.serialization.object({
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    payments: core.serialization
        .list(
            core.serialization
                .lazy(async () => (await import("../../..")).accounting.JournalEntryRequestPaymentsItem)
                .optional()
        )
        .optional(),
    memo: core.serialization.string().optional(),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.JournalEntryRequestCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    company: core.serialization
        .lazy(async () => (await import("../../..")).accounting.JournalEntryRequestCompany)
        .optional(),
    lines: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.JournalLineRequest))
        .optional(),
    postingStatus: core.serialization.property(
        "posting_status",
        core.serialization
            .lazy(async () => (await import("../../..")).accounting.JournalEntryRequestPostingStatus)
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

export declare namespace JournalEntryRequest {
    interface Raw {
        transaction_date?: string | null;
        payments?: (serializers.accounting.JournalEntryRequestPaymentsItem.Raw | null | undefined)[] | null;
        memo?: string | null;
        currency?: serializers.accounting.JournalEntryRequestCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: serializers.accounting.JournalEntryRequestCompany.Raw | null;
        lines?: serializers.accounting.JournalLineRequest.Raw[] | null;
        posting_status?: serializers.accounting.JournalEntryRequestPostingStatus.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
