/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const IssueStatus: core.serialization.Schema<serializers.hris.IssueStatus.Raw, Merge.hris.IssueStatus> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazy(async () => (await import("../../..")).hris.IssueStatusEnum),
        core.serialization.string(),
    ]);

export declare namespace IssueStatus {
    type Raw = serializers.hris.IssueStatusEnum.Raw | string;
}