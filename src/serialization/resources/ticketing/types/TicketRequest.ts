/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TicketRequest: core.serialization.ObjectSchema<
    serializers.ticketing.TicketRequest.Raw,
    Merge.ticketing.TicketRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    assignees: core.serialization.list(core.serialization.string().optional()).optional(),
    creator: core.serialization.string().optional(),
    dueDate: core.serialization.property("due_date", core.serialization.string().optional()),
    status: core.serialization.lazy(async () => (await import("../../..")).ticketing.TicketRequestStatus).optional(),
    description: core.serialization.string().optional(),
    collections: core.serialization.list(core.serialization.string().optional()).optional(),
    ticketType: core.serialization.property("ticket_type", core.serialization.string().optional()),
    account: core.serialization.string().optional(),
    contact: core.serialization.string().optional(),
    parentTicket: core.serialization.property("parent_ticket", core.serialization.string().optional()),
    attachments: core.serialization.list(core.serialization.string().optional()).optional(),
    tags: core.serialization.list(core.serialization.string().optional()).optional(),
    completedAt: core.serialization.property("completed_at", core.serialization.string().optional()),
    ticketUrl: core.serialization.property("ticket_url", core.serialization.string().optional()),
    priority: core.serialization
        .lazy(async () => (await import("../../..")).ticketing.TicketRequestPriority)
        .optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteFields: core.serialization.property(
        "remote_fields",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.RemoteFieldRequest))
            .optional()
    ),
});

export declare namespace TicketRequest {
    interface Raw {
        name?: string | null;
        assignees?: (string | null | undefined)[] | null;
        creator?: string | null;
        due_date?: string | null;
        status?: serializers.ticketing.TicketRequestStatus.Raw | null;
        description?: string | null;
        collections?: (string | null | undefined)[] | null;
        ticket_type?: string | null;
        account?: string | null;
        contact?: string | null;
        parent_ticket?: string | null;
        attachments?: (string | null | undefined)[] | null;
        tags?: (string | null | undefined)[] | null;
        completed_at?: string | null;
        ticket_url?: string | null;
        priority?: serializers.ticketing.TicketRequestPriority.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: serializers.ticketing.RemoteFieldRequest.Raw[] | null;
    }
}