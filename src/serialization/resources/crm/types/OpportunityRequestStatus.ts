/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const OpportunityRequestStatus: core.serialization.Schema<
    serializers.crm.OpportunityRequestStatus.Raw,
    Merge.crm.OpportunityRequestStatus
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).crm.OpportunityStatusEnum),
    core.serialization.string(),
]);

export declare namespace OpportunityRequestStatus {
    type Raw = serializers.crm.OpportunityStatusEnum.Raw | string;
}