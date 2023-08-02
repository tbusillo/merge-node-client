/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CustomObject: core.serialization.ObjectSchema<serializers.crm.CustomObject.Raw, Merge.crm.CustomObject> =
    core.serialization.object({
        objectClass: core.serialization.property("object_class", core.serialization.string().optional()),
        fields: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        id: core.serialization.string().optional(),
        modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
        remoteFields: core.serialization.property(
            "remote_fields",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteField))
                .optional()
        ),
    });

export declare namespace CustomObject {
    interface Raw {
        object_class?: string | null;
        fields?: Record<string, unknown> | null;
        remote_id?: string | null;
        id?: string | null;
        modified_at?: string | null;
        remote_fields?: serializers.crm.RemoteField.Raw[] | null;
    }
}