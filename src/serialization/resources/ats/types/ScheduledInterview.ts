/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScheduledInterview: core.serialization.ObjectSchema<
    serializers.ats.ScheduledInterview.Raw,
    Merge.ats.ScheduledInterview
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    application: core.serialization
        .lazy(async () => (await import("../../..")).ats.ScheduledInterviewApplication)
        .optional(),
    jobInterviewStage: core.serialization.property(
        "job_interview_stage",
        core.serialization
            .lazy(async () => (await import("../../..")).ats.ScheduledInterviewJobInterviewStage)
            .optional()
    ),
    organizer: core.serialization
        .lazy(async () => (await import("../../..")).ats.ScheduledInterviewOrganizer)
        .optional(),
    interviewers: core.serialization
        .list(
            core.serialization
                .lazy(async () => (await import("../../..")).ats.ScheduledInterviewInterviewersItem)
                .optional()
        )
        .optional(),
    location: core.serialization.string().optional(),
    startAt: core.serialization.property("start_at", core.serialization.date().optional()),
    endAt: core.serialization.property("end_at", core.serialization.date().optional()),
    remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
    remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
    status: core.serialization.lazy(async () => (await import("../../..")).ats.ScheduledInterviewStatus).optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.RemoteData))
            .optional()
    ),
});

export declare namespace ScheduledInterview {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        application?: serializers.ats.ScheduledInterviewApplication.Raw | null;
        job_interview_stage?: serializers.ats.ScheduledInterviewJobInterviewStage.Raw | null;
        organizer?: serializers.ats.ScheduledInterviewOrganizer.Raw | null;
        interviewers?: (serializers.ats.ScheduledInterviewInterviewersItem.Raw | null | undefined)[] | null;
        location?: string | null;
        start_at?: string | null;
        end_at?: string | null;
        remote_created_at?: string | null;
        remote_updated_at?: string | null;
        status?: serializers.ats.ScheduledInterviewStatus.Raw | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.ats.RemoteData.Raw[] | null;
    }
}
