/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScheduledInterviewInterviewersItem: core.serialization.Schema<
    serializers.ats.ScheduledInterviewInterviewersItem.Raw,
    Merge.ats.ScheduledInterviewInterviewersItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.RemoteUser),
]);

export declare namespace ScheduledInterviewInterviewersItem {
    type Raw = string | serializers.ats.RemoteUser.Raw;
}
