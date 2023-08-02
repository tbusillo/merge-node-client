/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountToken: core.serialization.ObjectSchema<
    serializers.accounting.AccountToken.Raw,
    Merge.accounting.AccountToken
> = core.serialization.object({
    accountToken: core.serialization.property("account_token", core.serialization.string()),
    integration: core.serialization.lazyObject(async () => (await import("../../..")).accounting.AccountIntegration),
});

export declare namespace AccountToken {
    interface Raw {
        account_token: string;
        integration: serializers.accounting.AccountIntegration.Raw;
    }
}