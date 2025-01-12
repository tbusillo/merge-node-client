/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Opportunity: core.serialization.ObjectSchema<serializers.crm.Opportunity.Raw, Merge.crm.Opportunity> =
    core.serialization.object({
        name: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        amount: core.serialization.number().optional(),
        owner: core.serialization.lazy(async () => (await import("../../..")).crm.OpportunityOwner).optional(),
        account: core.serialization.lazy(async () => (await import("../../..")).crm.OpportunityAccount).optional(),
        stage: core.serialization.lazy(async () => (await import("../../..")).crm.OpportunityStage).optional(),
        status: core.serialization.lazy(async () => (await import("../../..")).crm.OpportunityStatus).optional(),
        lastActivityAt: core.serialization.property("last_activity_at", core.serialization.date().optional()),
        closeDate: core.serialization.property("close_date", core.serialization.date().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
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

export declare namespace Opportunity {
    interface Raw {
        name?: string | null;
        description?: string | null;
        amount?: number | null;
        owner?: serializers.crm.OpportunityOwner.Raw | null;
        account?: serializers.crm.OpportunityAccount.Raw | null;
        stage?: serializers.crm.OpportunityStage.Raw | null;
        status?: serializers.crm.OpportunityStatus.Raw | null;
        last_activity_at?: string | null;
        close_date?: string | null;
        remote_created_at?: string | null;
        remote_was_deleted?: boolean | null;
        id?: string | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.crm.RemoteData.Raw[] | null;
        remote_fields?: serializers.crm.RemoteField.Raw[] | null;
    }
}
