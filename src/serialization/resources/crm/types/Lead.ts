/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Lead: core.serialization.ObjectSchema<serializers.crm.Lead.Raw, Merge.crm.Lead> =
    core.serialization.object({
        owner: core.serialization.lazy(async () => (await import("../../..")).crm.LeadOwner).optional(),
        leadSource: core.serialization.property("lead_source", core.serialization.string().optional()),
        title: core.serialization.string().optional(),
        company: core.serialization.string().optional(),
        firstName: core.serialization.property("first_name", core.serialization.string().optional()),
        lastName: core.serialization.property("last_name", core.serialization.string().optional()),
        addresses: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.Address))
            .optional(),
        emailAddresses: core.serialization.property(
            "email_addresses",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.EmailAddress))
                .optional()
        ),
        phoneNumbers: core.serialization.property(
            "phone_numbers",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.PhoneNumber))
                .optional()
        ),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        convertedDate: core.serialization.property("converted_date", core.serialization.date().optional()),
        convertedContact: core.serialization.property(
            "converted_contact",
            core.serialization.lazy(async () => (await import("../../..")).crm.LeadConvertedContact).optional()
        ),
        convertedAccount: core.serialization.property(
            "converted_account",
            core.serialization.lazy(async () => (await import("../../..")).crm.LeadConvertedAccount).optional()
        ),
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
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteData))
                .optional()
        ),
        remoteFields: core.serialization.property(
            "remote_fields",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteField))
                .optional()
        ),
    });

export declare namespace Lead {
    interface Raw {
        owner?: serializers.crm.LeadOwner.Raw | null;
        lead_source?: string | null;
        title?: string | null;
        company?: string | null;
        first_name?: string | null;
        last_name?: string | null;
        addresses?: serializers.crm.Address.Raw[] | null;
        email_addresses?: serializers.crm.EmailAddress.Raw[] | null;
        phone_numbers?: serializers.crm.PhoneNumber.Raw[] | null;
        remote_updated_at?: string | null;
        remote_created_at?: string | null;
        converted_date?: string | null;
        converted_contact?: serializers.crm.LeadConvertedContact.Raw | null;
        converted_account?: serializers.crm.LeadConvertedAccount.Raw | null;
        remote_was_deleted?: boolean | null;
        id?: string | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.crm.RemoteData.Raw[] | null;
        remote_fields?: serializers.crm.RemoteField.Raw[] | null;
    }
}
