/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const File_: core.serialization.ObjectSchema<serializers.filestorage.File_.Raw, Merge.filestorage.File_> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        fileUrl: core.serialization.property("file_url", core.serialization.string().optional()),
        fileThumbnailUrl: core.serialization.property("file_thumbnail_url", core.serialization.string().optional()),
        size: core.serialization.number().optional(),
        mimeType: core.serialization.property("mime_type", core.serialization.string().optional()),
        description: core.serialization.string().optional(),
        folder: core.serialization.string().optional(),
        permissions: core.serialization.list(core.serialization.string()),
        drive: core.serialization.string().optional(),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
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

export declare namespace File_ {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        name?: string | null;
        file_url?: string | null;
        file_thumbnail_url?: string | null;
        size?: number | null;
        mime_type?: string | null;
        description?: string | null;
        folder?: string | null;
        permissions: string[];
        drive?: string | null;
        remote_created_at?: string | null;
        remote_updated_at?: string | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: (Record<string, unknown> | null | undefined)[] | null;
    }
}
