/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Tag: core.serialization.ObjectSchema<serializers.ats.Tag.Raw, Merge.ats.Tag> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional())
            .optional()
    ),
});

export declare namespace Tag {
    interface Raw {
        remote_id?: string | null;
        name?: string | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: (Record<string, unknown> | null | undefined)[] | null;
    }
}
