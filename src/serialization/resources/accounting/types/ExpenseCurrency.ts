/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ExpenseCurrency: core.serialization.Schema<
    serializers.accounting.ExpenseCurrency.Raw,
    Merge.accounting.ExpenseCurrency
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.CurrencyEnum),
    core.serialization.string(),
]);

export declare namespace ExpenseCurrency {
    type Raw = serializers.accounting.CurrencyEnum.Raw | string;
}