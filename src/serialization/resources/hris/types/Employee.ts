/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Employee: core.serialization.ObjectSchema<serializers.hris.Employee.Raw, Merge.hris.Employee> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        employeeNumber: core.serialization.property("employee_number", core.serialization.string().optional()),
        company: core.serialization.string().optional(),
        firstName: core.serialization.property("first_name", core.serialization.string().optional()),
        lastName: core.serialization.property("last_name", core.serialization.string().optional()),
        displayFullName: core.serialization.property("display_full_name", core.serialization.string().optional()),
        username: core.serialization.string().optional(),
        groups: core.serialization.list(core.serialization.string().optional()).optional(),
        workEmail: core.serialization.property("work_email", core.serialization.string().optional()),
        personalEmail: core.serialization.property("personal_email", core.serialization.string().optional()),
        mobilePhoneNumber: core.serialization.property("mobile_phone_number", core.serialization.string().optional()),
        employments: core.serialization.list(core.serialization.string().optional()).optional(),
        homeLocation: core.serialization.property("home_location", core.serialization.string().optional()),
        workLocation: core.serialization.property("work_location", core.serialization.string().optional()),
        manager: core.serialization.string().optional(),
        team: core.serialization.string().optional(),
        payGroup: core.serialization.property("pay_group", core.serialization.string().optional()),
        ssn: core.serialization.string().optional(),
        gender: core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeGender).optional(),
        ethnicity: core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeEthnicity).optional(),
        maritalStatus: core.serialization.property(
            "marital_status",
            core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeMaritalStatus).optional()
        ),
        dateOfBirth: core.serialization.property("date_of_birth", core.serialization.string().optional()),
        hireDate: core.serialization.property("hire_date", core.serialization.string().optional()),
        startDate: core.serialization.property("start_date", core.serialization.string().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.string().optional()),
        employmentStatus: core.serialization.property(
            "employment_status",
            core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeEmploymentStatus).optional()
        ),
        terminationDate: core.serialization.property("termination_date", core.serialization.string().optional()),
        avatar: core.serialization.string().optional(),
        customFields: core.serialization.property(
            "custom_fields",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.RemoteData))
                .optional()
        ),
    });

export declare namespace Employee {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        employee_number?: string | null;
        company?: string | null;
        first_name?: string | null;
        last_name?: string | null;
        display_full_name?: string | null;
        username?: string | null;
        groups?: (string | null | undefined)[] | null;
        work_email?: string | null;
        personal_email?: string | null;
        mobile_phone_number?: string | null;
        employments?: (string | null | undefined)[] | null;
        home_location?: string | null;
        work_location?: string | null;
        manager?: string | null;
        team?: string | null;
        pay_group?: string | null;
        ssn?: string | null;
        gender?: serializers.hris.EmployeeGender.Raw | null;
        ethnicity?: serializers.hris.EmployeeEthnicity.Raw | null;
        marital_status?: serializers.hris.EmployeeMaritalStatus.Raw | null;
        date_of_birth?: string | null;
        hire_date?: string | null;
        start_date?: string | null;
        remote_created_at?: string | null;
        employment_status?: serializers.hris.EmployeeEmploymentStatus.Raw | null;
        termination_date?: string | null;
        avatar?: string | null;
        custom_fields?: Record<string, unknown> | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.hris.RemoteData.Raw[] | null;
    }
}