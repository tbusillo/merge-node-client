/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountingAttachmentResponse: core.serialization.ObjectSchema<
    serializers.accounting.AccountingAttachmentResponse.Raw,
    Merge.accounting.AccountingAttachmentResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../..")).accounting.AccountingAttachment),
    warnings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).accounting.WarningValidationProblem)
    ),
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).accounting.ErrorValidationProblem)
    ),
    logs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.DebugModeLog))
        .optional(),
});

export declare namespace AccountingAttachmentResponse {
    interface Raw {
        model: serializers.accounting.AccountingAttachment.Raw;
        warnings: serializers.accounting.WarningValidationProblem.Raw[];
        errors: serializers.accounting.ErrorValidationProblem.Raw[];
        logs?: serializers.accounting.DebugModeLog.Raw[] | null;
    }
}