/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountingPhoneNumber: core.serialization.ObjectSchema<
    serializers.accounting.AccountingPhoneNumber.Raw,
    Merge.accounting.AccountingPhoneNumber
> = core.serialization.object({
    number: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace AccountingPhoneNumber {
    interface Raw {
        number?: string | null;
        type?: string | null;
        modified_at?: string | null;
    }
}
