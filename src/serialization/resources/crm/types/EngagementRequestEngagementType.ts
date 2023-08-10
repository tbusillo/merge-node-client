/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EngagementRequestEngagementType: core.serialization.Schema<
    serializers.crm.EngagementRequestEngagementType.Raw,
    Merge.crm.EngagementRequestEngagementType
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).crm.EngagementType),
]);

export declare namespace EngagementRequestEngagementType {
    type Raw = string | serializers.crm.EngagementType.Raw;
}
