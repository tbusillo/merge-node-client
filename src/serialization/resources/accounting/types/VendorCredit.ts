/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const VendorCredit: core.serialization.ObjectSchema<
    serializers.accounting.VendorCredit.Raw,
    Merge.accounting.VendorCredit
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    number: core.serialization.string().optional(),
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    vendor: core.serialization.lazy(async () => (await import("../../..")).accounting.VendorCreditVendor).optional(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.VendorCreditCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    company: core.serialization.lazy(async () => (await import("../../..")).accounting.VendorCreditCompany).optional(),
    lines: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.VendorCreditLine))
        .optional(),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.VendorCreditTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
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

export declare namespace VendorCredit {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        number?: string | null;
        transaction_date?: string | null;
        vendor?: serializers.accounting.VendorCreditVendor.Raw | null;
        total_amount?: number | null;
        currency?: serializers.accounting.VendorCreditCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: serializers.accounting.VendorCreditCompany.Raw | null;
        lines?: serializers.accounting.VendorCreditLine.Raw[] | null;
        tracking_categories?:
            | (serializers.accounting.VendorCreditTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
