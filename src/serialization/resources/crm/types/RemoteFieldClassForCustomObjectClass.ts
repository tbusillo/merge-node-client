/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldClassForCustomObjectClass: core.serialization.ObjectSchema<
    serializers.crm.RemoteFieldClassForCustomObjectClass.Raw,
    Merge.crm.RemoteFieldClassForCustomObjectClass
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    remoteKeyName: core.serialization.property("remote_key_name", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    isRequired: core.serialization.property("is_required", core.serialization.boolean().optional()),
    fieldType: core.serialization.property(
        "field_type",
        core.serialization
            .lazy(async () => (await import("../../..")).crm.RemoteFieldClassForCustomObjectClassFieldType)
            .optional()
    ),
    fieldFormat: core.serialization.property(
        "field_format",
        core.serialization
            .lazy(async () => (await import("../../..")).crm.RemoteFieldClassForCustomObjectClassFieldFormat)
            .optional()
    ),
    fieldChoices: core.serialization.property(
        "field_choices",
        core.serialization.list(core.serialization.string().optional()).optional()
    ),
    itemSchema: core.serialization.property(
        "item_schema",
        core.serialization
            .lazyObject(async () => (await import("../../..")).crm.RemoteFieldClassForCustomObjectClassItemSchema)
            .optional()
    ),
    modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
});

export declare namespace RemoteFieldClassForCustomObjectClass {
    interface Raw {
        display_name?: string | null;
        remote_key_name?: string | null;
        description?: string | null;
        is_required?: boolean | null;
        field_type?: serializers.crm.RemoteFieldClassForCustomObjectClassFieldType.Raw | null;
        field_format?: serializers.crm.RemoteFieldClassForCustomObjectClassFieldFormat.Raw | null;
        field_choices?: (string | null | undefined)[] | null;
        item_schema?: serializers.crm.RemoteFieldClassForCustomObjectClassItemSchema.Raw | null;
        modified_at?: string | null;
    }
}