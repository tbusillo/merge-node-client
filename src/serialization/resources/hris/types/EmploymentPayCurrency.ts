/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmploymentPayCurrency: core.serialization.Schema<
    serializers.hris.EmploymentPayCurrency.Raw,
    Merge.hris.EmploymentPayCurrency
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).hris.PayCurrencyEnum),
    core.serialization.string(),
]);

export declare namespace EmploymentPayCurrency {
    type Raw = serializers.hris.PayCurrencyEnum.Raw | string;
}