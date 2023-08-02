/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CategoriesEnum: core.serialization.Schema<
    serializers.ticketing.CategoriesEnum.Raw,
    Merge.ticketing.CategoriesEnum
> = core.serialization.enum_(["hris", "ats", "accounting", "ticketing", "crm", "mktg", "filestorage"]);

export declare namespace CategoriesEnum {
    type Raw = "hris" | "ats" | "accounting" | "ticketing" | "crm" | "mktg" | "filestorage";
}