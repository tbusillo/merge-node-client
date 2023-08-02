/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `OPEN` - OPEN
 * * `CLOSED` - CLOSED
 * * `DRAFT` - DRAFT
 * * `ARCHIVED` - ARCHIVED
 * * `PENDING` - PENDING
 */
export type JobStatusEnum = "OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED" | "PENDING";

export const JobStatusEnum = {
    Open: "OPEN",
    Closed: "CLOSED",
    Draft: "DRAFT",
    Archived: "ARCHIVED",
    Pending: "PENDING",
} as const;