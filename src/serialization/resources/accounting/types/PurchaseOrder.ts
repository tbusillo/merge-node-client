/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PurchaseOrder: core.serialization.ObjectSchema<
    serializers.accounting.PurchaseOrder.Raw,
    Merge.accounting.PurchaseOrder
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../..")).accounting.PurchaseOrderStatus).optional(),
    issueDate: core.serialization.property("issue_date", core.serialization.date().optional()),
    deliveryDate: core.serialization.property("delivery_date", core.serialization.date().optional()),
    deliveryAddress: core.serialization.property(
        "delivery_address",
        core.serialization
            .lazy(async () => (await import("../../..")).accounting.PurchaseOrderDeliveryAddress)
            .optional()
    ),
    customer: core.serialization.string().optional(),
    vendor: core.serialization.lazy(async () => (await import("../../..")).accounting.PurchaseOrderVendor).optional(),
    memo: core.serialization.string().optional(),
    company: core.serialization.lazy(async () => (await import("../../..")).accounting.PurchaseOrderCompany).optional(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.PurchaseOrderCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    lineItems: core.serialization.property(
        "line_items",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.PurchaseOrderLineItem)
            )
            .optional()
    ),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.PurchaseOrderTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
    remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
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

export declare namespace PurchaseOrder {
    interface Raw {
        status?: serializers.accounting.PurchaseOrderStatus.Raw | null;
        issue_date?: string | null;
        delivery_date?: string | null;
        delivery_address?: serializers.accounting.PurchaseOrderDeliveryAddress.Raw | null;
        customer?: string | null;
        vendor?: serializers.accounting.PurchaseOrderVendor.Raw | null;
        memo?: string | null;
        company?: serializers.accounting.PurchaseOrderCompany.Raw | null;
        total_amount?: number | null;
        currency?: serializers.accounting.PurchaseOrderCurrency.Raw | null;
        exchange_rate?: string | null;
        line_items?: serializers.accounting.PurchaseOrderLineItem.Raw[] | null;
        tracking_categories?:
            | (serializers.accounting.PurchaseOrderTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        remote_created_at?: string | null;
        remote_updated_at?: string | null;
        remote_was_deleted?: boolean | null;
        id?: string | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
