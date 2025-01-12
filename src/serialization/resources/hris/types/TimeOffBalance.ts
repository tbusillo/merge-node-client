/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TimeOffBalance: core.serialization.ObjectSchema<
    serializers.hris.TimeOffBalance.Raw,
    Merge.hris.TimeOffBalance
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    employee: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffBalanceEmployee).optional(),
    balance: core.serialization.number().optional(),
    used: core.serialization.number().optional(),
    policyType: core.serialization.property(
        "policy_type",
        core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffBalancePolicyType).optional()
    ),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.RemoteData))
            .optional()
    ),
});

export declare namespace TimeOffBalance {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        employee?: serializers.hris.TimeOffBalanceEmployee.Raw | null;
        balance?: number | null;
        used?: number | null;
        policy_type?: serializers.hris.TimeOffBalancePolicyType.Raw | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.hris.RemoteData.Raw[] | null;
    }
}
