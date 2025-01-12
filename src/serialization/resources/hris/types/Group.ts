/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Group: core.serialization.ObjectSchema<serializers.hris.Group.Raw, Merge.hris.Group> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        parentGroup: core.serialization.property("parent_group", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        type: core.serialization.lazy(async () => (await import("../../..")).hris.GroupType).optional(),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.RemoteData))
                .optional()
        ),
    });

export declare namespace Group {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        parent_group?: string | null;
        name?: string | null;
        type?: serializers.hris.GroupType.Raw | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.hris.RemoteData.Raw[] | null;
    }
}
