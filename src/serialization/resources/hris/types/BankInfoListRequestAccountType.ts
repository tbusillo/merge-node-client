/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const BankInfoListRequestAccountType: core.serialization.Schema<
    serializers.hris.BankInfoListRequestAccountType.Raw,
    Merge.hris.BankInfoListRequestAccountType
> = core.serialization.enum_(["CHECKING", "SAVINGS"]);

export declare namespace BankInfoListRequestAccountType {
    type Raw = "CHECKING" | "SAVINGS";
}