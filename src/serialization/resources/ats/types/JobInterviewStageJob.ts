/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JobInterviewStageJob: core.serialization.Schema<
    serializers.ats.JobInterviewStageJob.Raw,
    Merge.ats.JobInterviewStageJob
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.Job),
]);

export declare namespace JobInterviewStageJob {
    type Raw = string | serializers.ats.Job.Raw;
}