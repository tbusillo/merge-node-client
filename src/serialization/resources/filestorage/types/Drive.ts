/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Drive: core.serialization.ObjectSchema<serializers.filestorage.Drive.Raw, Merge.filestorage.Drive> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        driveUrl: core.serialization.property("drive_url", core.serialization.string().optional()),
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

export declare namespace Drive {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        name?: string | null;
        remote_created_at?: string | null;
        drive_url?: string | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: (Record<string, unknown> | null | undefined)[] | null;
    }
}
