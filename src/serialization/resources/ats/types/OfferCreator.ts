/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const OfferCreator: core.serialization.Schema<serializers.ats.OfferCreator.Raw, Merge.ats.OfferCreator> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).ats.RemoteUser),
    ]);

export declare namespace OfferCreator {
    type Raw = string | serializers.ats.RemoteUser.Raw;
}
