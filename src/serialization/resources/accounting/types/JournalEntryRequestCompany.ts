/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalEntryRequestCompany: core.serialization.Schema<
    serializers.accounting.JournalEntryRequestCompany.Raw,
    Merge.accounting.JournalEntryRequestCompany
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.CompanyInfo),
]);

export declare namespace JournalEntryRequestCompany {
    type Raw = string | serializers.accounting.CompanyInfo.Raw;
}
