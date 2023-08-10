/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TicketRequestContact: core.serialization.Schema<
    serializers.ticketing.TicketRequestContact.Raw,
    Merge.ticketing.TicketRequestContact
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Contact),
]);

export declare namespace TicketRequestContact {
    type Raw = string | serializers.ticketing.Contact.Raw;
}