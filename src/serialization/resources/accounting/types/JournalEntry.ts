/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalEntry: core.serialization.ObjectSchema<
    serializers.accounting.JournalEntry.Raw,
    Merge.accounting.JournalEntry
> = core.serialization.object({
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
    remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
    payments: core.serialization
        .list(
            core.serialization
                .lazy(async () => (await import("../../..")).accounting.JournalEntryPaymentsItem)
                .optional()
        )
        .optional(),
    memo: core.serialization.string().optional(),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.JournalEntryCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    company: core.serialization.lazy(async () => (await import("../../..")).accounting.JournalEntryCompany).optional(),
    lines: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.JournalLine))
        .optional(),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.JournalEntryTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    postingStatus: core.serialization.property(
        "posting_status",
        core.serialization.lazy(async () => (await import("../../..")).accounting.JournalEntryPostingStatus).optional()
    ),
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.RemoteData))
            .optional()
    ),
});

export declare namespace JournalEntry {
    interface Raw {
        transaction_date?: string | null;
        remote_created_at?: string | null;
        remote_updated_at?: string | null;
        payments?: (serializers.accounting.JournalEntryPaymentsItem.Raw | null | undefined)[] | null;
        memo?: string | null;
        currency?: serializers.accounting.JournalEntryCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: serializers.accounting.JournalEntryCompany.Raw | null;
        lines?: serializers.accounting.JournalLine.Raw[] | null;
        tracking_categories?:
            | (serializers.accounting.JournalEntryTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        remote_was_deleted?: boolean | null;
        posting_status?: serializers.accounting.JournalEntryPostingStatus.Raw | null;
        id?: string | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
