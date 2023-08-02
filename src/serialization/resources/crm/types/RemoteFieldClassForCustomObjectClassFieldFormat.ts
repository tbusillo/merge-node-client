/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldClassForCustomObjectClassFieldFormat: core.serialization.Schema<
    serializers.crm.RemoteFieldClassForCustomObjectClassFieldFormat.Raw,
    Merge.crm.RemoteFieldClassForCustomObjectClassFieldFormat
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).crm.FieldFormatEnum),
    core.serialization.string(),
]);

export declare namespace RemoteFieldClassForCustomObjectClassFieldFormat {
    type Raw = serializers.crm.FieldFormatEnum.Raw | string;
}