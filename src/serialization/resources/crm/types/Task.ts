/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Task: core.serialization.ObjectSchema<serializers.crm.Task.Raw, Merge.crm.Task> =
    core.serialization.object({
        subject: core.serialization.string().optional(),
        content: core.serialization.string().optional(),
        owner: core.serialization.lazy(async () => (await import("../../..")).crm.TaskOwner).optional(),
        account: core.serialization.lazy(async () => (await import("../../..")).crm.TaskAccount).optional(),
        opportunity: core.serialization.lazy(async () => (await import("../../..")).crm.TaskOpportunity).optional(),
        completedDate: core.serialization.property("completed_date", core.serialization.date().optional()),
        dueDate: core.serialization.property("due_date", core.serialization.date().optional()),
        status: core.serialization.lazy(async () => (await import("../../..")).crm.TaskStatus).optional(),
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

export declare namespace Task {
    interface Raw {
        subject?: string | null;
        content?: string | null;
        owner?: serializers.crm.TaskOwner.Raw | null;
        account?: serializers.crm.TaskAccount.Raw | null;
        opportunity?: serializers.crm.TaskOpportunity.Raw | null;
        completed_date?: string | null;
        due_date?: string | null;
        status?: serializers.crm.TaskStatus.Raw | null;
        remote_was_deleted?: boolean | null;
        id?: string | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.crm.RemoteData.Raw[] | null;
        remote_fields?: serializers.crm.RemoteField.Raw[] | null;
    }
}
