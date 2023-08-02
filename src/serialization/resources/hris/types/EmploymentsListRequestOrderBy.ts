/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmploymentsListRequestOrderBy: core.serialization.Schema<
    serializers.hris.EmploymentsListRequestOrderBy.Raw,
    Merge.hris.EmploymentsListRequestOrderBy
> = core.serialization.enum_(["-effective_date", "effective_date"]);

export declare namespace EmploymentsListRequestOrderBy {
    type Raw = "-effective_date" | "effective_date";
}