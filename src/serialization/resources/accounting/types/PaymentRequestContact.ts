/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaymentRequestContact: core.serialization.Schema<
    serializers.accounting.PaymentRequestContact.Raw,
    Merge.accounting.PaymentRequestContact
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.Contact),
]);

export declare namespace PaymentRequestContact {
    type Raw = string | serializers.accounting.Contact.Raw;
}
