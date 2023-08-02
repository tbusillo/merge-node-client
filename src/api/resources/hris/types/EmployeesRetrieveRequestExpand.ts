/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type EmployeesRetrieveRequestExpand =
    | "company"
    | "company,pay_group"
    | "employments"
    | "employments,company"
    | "employments,company,pay_group"
    | "employments,groups"
    | "employments,groups,company"
    | "employments,groups,company,pay_group"
    | "employments,groups,home_location"
    | "employments,groups,home_location,company"
    | "employments,groups,home_location,company,pay_group"
    | "employments,groups,home_location,manager"
    | "employments,groups,home_location,manager,company"
    | "employments,groups,home_location,manager,company,pay_group"
    | "employments,groups,home_location,manager,pay_group"
    | "employments,groups,home_location,manager,team"
    | "employments,groups,home_location,manager,team,company"
    | "employments,groups,home_location,manager,team,company,pay_group"
    | "employments,groups,home_location,manager,team,pay_group"
    | "employments,groups,home_location,pay_group"
    | "employments,groups,home_location,team"
    | "employments,groups,home_location,team,company"
    | "employments,groups,home_location,team,company,pay_group"
    | "employments,groups,home_location,team,pay_group"
    | "employments,groups,home_location,work_location"
    | "employments,groups,home_location,work_location,company"
    | "employments,groups,home_location,work_location,company,pay_group"
    | "employments,groups,home_location,work_location,manager"
    | "employments,groups,home_location,work_location,manager,company"
    | "employments,groups,home_location,work_location,manager,company,pay_group"
    | "employments,groups,home_location,work_location,manager,pay_group"
    | "employments,groups,home_location,work_location,manager,team"
    | "employments,groups,home_location,work_location,manager,team,company"
    | "employments,groups,home_location,work_location,manager,team,company,pay_group"
    | "employments,groups,home_location,work_location,manager,team,pay_group"
    | "employments,groups,home_location,work_location,pay_group"
    | "employments,groups,home_location,work_location,team"
    | "employments,groups,home_location,work_location,team,company"
    | "employments,groups,home_location,work_location,team,company,pay_group"
    | "employments,groups,home_location,work_location,team,pay_group"
    | "employments,groups,manager"
    | "employments,groups,manager,company"
    | "employments,groups,manager,company,pay_group"
    | "employments,groups,manager,pay_group"
    | "employments,groups,manager,team"
    | "employments,groups,manager,team,company"
    | "employments,groups,manager,team,company,pay_group"
    | "employments,groups,manager,team,pay_group"
    | "employments,groups,pay_group"
    | "employments,groups,team"
    | "employments,groups,team,company"
    | "employments,groups,team,company,pay_group"
    | "employments,groups,team,pay_group"
    | "employments,groups,work_location"
    | "employments,groups,work_location,company"
    | "employments,groups,work_location,company,pay_group"
    | "employments,groups,work_location,manager"
    | "employments,groups,work_location,manager,company"
    | "employments,groups,work_location,manager,company,pay_group"
    | "employments,groups,work_location,manager,pay_group"
    | "employments,groups,work_location,manager,team"
    | "employments,groups,work_location,manager,team,company"
    | "employments,groups,work_location,manager,team,company,pay_group"
    | "employments,groups,work_location,manager,team,pay_group"
    | "employments,groups,work_location,pay_group"
    | "employments,groups,work_location,team"
    | "employments,groups,work_location,team,company"
    | "employments,groups,work_location,team,company,pay_group"
    | "employments,groups,work_location,team,pay_group"
    | "employments,home_location"
    | "employments,home_location,company"
    | "employments,home_location,company,pay_group"
    | "employments,home_location,manager"
    | "employments,home_location,manager,company"
    | "employments,home_location,manager,company,pay_group"
    | "employments,home_location,manager,pay_group"
    | "employments,home_location,manager,team"
    | "employments,home_location,manager,team,company"
    | "employments,home_location,manager,team,company,pay_group"
    | "employments,home_location,manager,team,pay_group"
    | "employments,home_location,pay_group"
    | "employments,home_location,team"
    | "employments,home_location,team,company"
    | "employments,home_location,team,company,pay_group"
    | "employments,home_location,team,pay_group"
    | "employments,home_location,work_location"
    | "employments,home_location,work_location,company"
    | "employments,home_location,work_location,company,pay_group"
    | "employments,home_location,work_location,manager"
    | "employments,home_location,work_location,manager,company"
    | "employments,home_location,work_location,manager,company,pay_group"
    | "employments,home_location,work_location,manager,pay_group"
    | "employments,home_location,work_location,manager,team"
    | "employments,home_location,work_location,manager,team,company"
    | "employments,home_location,work_location,manager,team,company,pay_group"
    | "employments,home_location,work_location,manager,team,pay_group"
    | "employments,home_location,work_location,pay_group"
    | "employments,home_location,work_location,team"
    | "employments,home_location,work_location,team,company"
    | "employments,home_location,work_location,team,company,pay_group"
    | "employments,home_location,work_location,team,pay_group"
    | "employments,manager"
    | "employments,manager,company"
    | "employments,manager,company,pay_group"
    | "employments,manager,pay_group"
    | "employments,manager,team"
    | "employments,manager,team,company"
    | "employments,manager,team,company,pay_group"
    | "employments,manager,team,pay_group"
    | "employments,pay_group"
    | "employments,team"
    | "employments,team,company"
    | "employments,team,company,pay_group"
    | "employments,team,pay_group"
    | "employments,work_location"
    | "employments,work_location,company"
    | "employments,work_location,company,pay_group"
    | "employments,work_location,manager"
    | "employments,work_location,manager,company"
    | "employments,work_location,manager,company,pay_group"
    | "employments,work_location,manager,pay_group"
    | "employments,work_location,manager,team"
    | "employments,work_location,manager,team,company"
    | "employments,work_location,manager,team,company,pay_group"
    | "employments,work_location,manager,team,pay_group"
    | "employments,work_location,pay_group"
    | "employments,work_location,team"
    | "employments,work_location,team,company"
    | "employments,work_location,team,company,pay_group"
    | "employments,work_location,team,pay_group"
    | "groups"
    | "groups,company"
    | "groups,company,pay_group"
    | "groups,home_location"
    | "groups,home_location,company"
    | "groups,home_location,company,pay_group"
    | "groups,home_location,manager"
    | "groups,home_location,manager,company"
    | "groups,home_location,manager,company,pay_group"
    | "groups,home_location,manager,pay_group"
    | "groups,home_location,manager,team"
    | "groups,home_location,manager,team,company"
    | "groups,home_location,manager,team,company,pay_group"
    | "groups,home_location,manager,team,pay_group"
    | "groups,home_location,pay_group"
    | "groups,home_location,team"
    | "groups,home_location,team,company"
    | "groups,home_location,team,company,pay_group"
    | "groups,home_location,team,pay_group"
    | "groups,home_location,work_location"
    | "groups,home_location,work_location,company"
    | "groups,home_location,work_location,company,pay_group"
    | "groups,home_location,work_location,manager"
    | "groups,home_location,work_location,manager,company"
    | "groups,home_location,work_location,manager,company,pay_group"
    | "groups,home_location,work_location,manager,pay_group"
    | "groups,home_location,work_location,manager,team"
    | "groups,home_location,work_location,manager,team,company"
    | "groups,home_location,work_location,manager,team,company,pay_group"
    | "groups,home_location,work_location,manager,team,pay_group"
    | "groups,home_location,work_location,pay_group"
    | "groups,home_location,work_location,team"
    | "groups,home_location,work_location,team,company"
    | "groups,home_location,work_location,team,company,pay_group"
    | "groups,home_location,work_location,team,pay_group"
    | "groups,manager"
    | "groups,manager,company"
    | "groups,manager,company,pay_group"
    | "groups,manager,pay_group"
    | "groups,manager,team"
    | "groups,manager,team,company"
    | "groups,manager,team,company,pay_group"
    | "groups,manager,team,pay_group"
    | "groups,pay_group"
    | "groups,team"
    | "groups,team,company"
    | "groups,team,company,pay_group"
    | "groups,team,pay_group"
    | "groups,work_location"
    | "groups,work_location,company"
    | "groups,work_location,company,pay_group"
    | "groups,work_location,manager"
    | "groups,work_location,manager,company"
    | "groups,work_location,manager,company,pay_group"
    | "groups,work_location,manager,pay_group"
    | "groups,work_location,manager,team"
    | "groups,work_location,manager,team,company"
    | "groups,work_location,manager,team,company,pay_group"
    | "groups,work_location,manager,team,pay_group"
    | "groups,work_location,pay_group"
    | "groups,work_location,team"
    | "groups,work_location,team,company"
    | "groups,work_location,team,company,pay_group"
    | "groups,work_location,team,pay_group"
    | "home_location"
    | "home_location,company"
    | "home_location,company,pay_group"
    | "home_location,manager"
    | "home_location,manager,company"
    | "home_location,manager,company,pay_group"
    | "home_location,manager,pay_group"
    | "home_location,manager,team"
    | "home_location,manager,team,company"
    | "home_location,manager,team,company,pay_group"
    | "home_location,manager,team,pay_group"
    | "home_location,pay_group"
    | "home_location,team"
    | "home_location,team,company"
    | "home_location,team,company,pay_group"
    | "home_location,team,pay_group"
    | "home_location,work_location"
    | "home_location,work_location,company"
    | "home_location,work_location,company,pay_group"
    | "home_location,work_location,manager"
    | "home_location,work_location,manager,company"
    | "home_location,work_location,manager,company,pay_group"
    | "home_location,work_location,manager,pay_group"
    | "home_location,work_location,manager,team"
    | "home_location,work_location,manager,team,company"
    | "home_location,work_location,manager,team,company,pay_group"
    | "home_location,work_location,manager,team,pay_group"
    | "home_location,work_location,pay_group"
    | "home_location,work_location,team"
    | "home_location,work_location,team,company"
    | "home_location,work_location,team,company,pay_group"
    | "home_location,work_location,team,pay_group"
    | "manager"
    | "manager,company"
    | "manager,company,pay_group"
    | "manager,pay_group"
    | "manager,team"
    | "manager,team,company"
    | "manager,team,company,pay_group"
    | "manager,team,pay_group"
    | "pay_group"
    | "team"
    | "team,company"
    | "team,company,pay_group"
    | "team,pay_group"
    | "work_location"
    | "work_location,company"
    | "work_location,company,pay_group"
    | "work_location,manager"
    | "work_location,manager,company"
    | "work_location,manager,company,pay_group"
    | "work_location,manager,pay_group"
    | "work_location,manager,team"
    | "work_location,manager,team,company"
    | "work_location,manager,team,company,pay_group"
    | "work_location,manager,team,pay_group"
    | "work_location,pay_group"
    | "work_location,team"
    | "work_location,team,company"
    | "work_location,team,company,pay_group"
    | "work_location,team,pay_group";

export const EmployeesRetrieveRequestExpand = {
    Company: "company",
    CompanyPayGroup: "company,pay_group",
    Employments: "employments",
    EmploymentsCompany: "employments,company",
    EmploymentsCompanyPayGroup: "employments,company,pay_group",
    EmploymentsGroups: "employments,groups",
    EmploymentsGroupsCompany: "employments,groups,company",
    EmploymentsGroupsCompanyPayGroup: "employments,groups,company,pay_group",
    EmploymentsGroupsHomeLocation: "employments,groups,home_location",
    EmploymentsGroupsHomeLocationCompany: "employments,groups,home_location,company",
    EmploymentsGroupsHomeLocationCompanyPayGroup: "employments,groups,home_location,company,pay_group",
    EmploymentsGroupsHomeLocationManager: "employments,groups,home_location,manager",
    EmploymentsGroupsHomeLocationManagerCompany: "employments,groups,home_location,manager,company",
    EmploymentsGroupsHomeLocationManagerCompanyPayGroup: "employments,groups,home_location,manager,company,pay_group",
    EmploymentsGroupsHomeLocationManagerPayGroup: "employments,groups,home_location,manager,pay_group",
    EmploymentsGroupsHomeLocationManagerTeam: "employments,groups,home_location,manager,team",
    EmploymentsGroupsHomeLocationManagerTeamCompany: "employments,groups,home_location,manager,team,company",
    EmploymentsGroupsHomeLocationManagerTeamCompanyPayGroup:
        "employments,groups,home_location,manager,team,company,pay_group",
    EmploymentsGroupsHomeLocationManagerTeamPayGroup: "employments,groups,home_location,manager,team,pay_group",
    EmploymentsGroupsHomeLocationPayGroup: "employments,groups,home_location,pay_group",
    EmploymentsGroupsHomeLocationTeam: "employments,groups,home_location,team",
    EmploymentsGroupsHomeLocationTeamCompany: "employments,groups,home_location,team,company",
    EmploymentsGroupsHomeLocationTeamCompanyPayGroup: "employments,groups,home_location,team,company,pay_group",
    EmploymentsGroupsHomeLocationTeamPayGroup: "employments,groups,home_location,team,pay_group",
    EmploymentsGroupsHomeLocationWorkLocation: "employments,groups,home_location,work_location",
    EmploymentsGroupsHomeLocationWorkLocationCompany: "employments,groups,home_location,work_location,company",
    EmploymentsGroupsHomeLocationWorkLocationCompanyPayGroup:
        "employments,groups,home_location,work_location,company,pay_group",
    EmploymentsGroupsHomeLocationWorkLocationManager: "employments,groups,home_location,work_location,manager",
    EmploymentsGroupsHomeLocationWorkLocationManagerCompany:
        "employments,groups,home_location,work_location,manager,company",
    EmploymentsGroupsHomeLocationWorkLocationManagerCompanyPayGroup:
        "employments,groups,home_location,work_location,manager,company,pay_group",
    EmploymentsGroupsHomeLocationWorkLocationManagerPayGroup:
        "employments,groups,home_location,work_location,manager,pay_group",
    EmploymentsGroupsHomeLocationWorkLocationManagerTeam: "employments,groups,home_location,work_location,manager,team",
    EmploymentsGroupsHomeLocationWorkLocationManagerTeamCompany:
        "employments,groups,home_location,work_location,manager,team,company",
    EmploymentsGroupsHomeLocationWorkLocationManagerTeamCompanyPayGroup:
        "employments,groups,home_location,work_location,manager,team,company,pay_group",
    EmploymentsGroupsHomeLocationWorkLocationManagerTeamPayGroup:
        "employments,groups,home_location,work_location,manager,team,pay_group",
    EmploymentsGroupsHomeLocationWorkLocationPayGroup: "employments,groups,home_location,work_location,pay_group",
    EmploymentsGroupsHomeLocationWorkLocationTeam: "employments,groups,home_location,work_location,team",
    EmploymentsGroupsHomeLocationWorkLocationTeamCompany: "employments,groups,home_location,work_location,team,company",
    EmploymentsGroupsHomeLocationWorkLocationTeamCompanyPayGroup:
        "employments,groups,home_location,work_location,team,company,pay_group",
    EmploymentsGroupsHomeLocationWorkLocationTeamPayGroup:
        "employments,groups,home_location,work_location,team,pay_group",
    EmploymentsGroupsManager: "employments,groups,manager",
    EmploymentsGroupsManagerCompany: "employments,groups,manager,company",
    EmploymentsGroupsManagerCompanyPayGroup: "employments,groups,manager,company,pay_group",
    EmploymentsGroupsManagerPayGroup: "employments,groups,manager,pay_group",
    EmploymentsGroupsManagerTeam: "employments,groups,manager,team",
    EmploymentsGroupsManagerTeamCompany: "employments,groups,manager,team,company",
    EmploymentsGroupsManagerTeamCompanyPayGroup: "employments,groups,manager,team,company,pay_group",
    EmploymentsGroupsManagerTeamPayGroup: "employments,groups,manager,team,pay_group",
    EmploymentsGroupsPayGroup: "employments,groups,pay_group",
    EmploymentsGroupsTeam: "employments,groups,team",
    EmploymentsGroupsTeamCompany: "employments,groups,team,company",
    EmploymentsGroupsTeamCompanyPayGroup: "employments,groups,team,company,pay_group",
    EmploymentsGroupsTeamPayGroup: "employments,groups,team,pay_group",
    EmploymentsGroupsWorkLocation: "employments,groups,work_location",
    EmploymentsGroupsWorkLocationCompany: "employments,groups,work_location,company",
    EmploymentsGroupsWorkLocationCompanyPayGroup: "employments,groups,work_location,company,pay_group",
    EmploymentsGroupsWorkLocationManager: "employments,groups,work_location,manager",
    EmploymentsGroupsWorkLocationManagerCompany: "employments,groups,work_location,manager,company",
    EmploymentsGroupsWorkLocationManagerCompanyPayGroup: "employments,groups,work_location,manager,company,pay_group",
    EmploymentsGroupsWorkLocationManagerPayGroup: "employments,groups,work_location,manager,pay_group",
    EmploymentsGroupsWorkLocationManagerTeam: "employments,groups,work_location,manager,team",
    EmploymentsGroupsWorkLocationManagerTeamCompany: "employments,groups,work_location,manager,team,company",
    EmploymentsGroupsWorkLocationManagerTeamCompanyPayGroup:
        "employments,groups,work_location,manager,team,company,pay_group",
    EmploymentsGroupsWorkLocationManagerTeamPayGroup: "employments,groups,work_location,manager,team,pay_group",
    EmploymentsGroupsWorkLocationPayGroup: "employments,groups,work_location,pay_group",
    EmploymentsGroupsWorkLocationTeam: "employments,groups,work_location,team",
    EmploymentsGroupsWorkLocationTeamCompany: "employments,groups,work_location,team,company",
    EmploymentsGroupsWorkLocationTeamCompanyPayGroup: "employments,groups,work_location,team,company,pay_group",
    EmploymentsGroupsWorkLocationTeamPayGroup: "employments,groups,work_location,team,pay_group",
    EmploymentsHomeLocation: "employments,home_location",
    EmploymentsHomeLocationCompany: "employments,home_location,company",
    EmploymentsHomeLocationCompanyPayGroup: "employments,home_location,company,pay_group",
    EmploymentsHomeLocationManager: "employments,home_location,manager",
    EmploymentsHomeLocationManagerCompany: "employments,home_location,manager,company",
    EmploymentsHomeLocationManagerCompanyPayGroup: "employments,home_location,manager,company,pay_group",
    EmploymentsHomeLocationManagerPayGroup: "employments,home_location,manager,pay_group",
    EmploymentsHomeLocationManagerTeam: "employments,home_location,manager,team",
    EmploymentsHomeLocationManagerTeamCompany: "employments,home_location,manager,team,company",
    EmploymentsHomeLocationManagerTeamCompanyPayGroup: "employments,home_location,manager,team,company,pay_group",
    EmploymentsHomeLocationManagerTeamPayGroup: "employments,home_location,manager,team,pay_group",
    EmploymentsHomeLocationPayGroup: "employments,home_location,pay_group",
    EmploymentsHomeLocationTeam: "employments,home_location,team",
    EmploymentsHomeLocationTeamCompany: "employments,home_location,team,company",
    EmploymentsHomeLocationTeamCompanyPayGroup: "employments,home_location,team,company,pay_group",
    EmploymentsHomeLocationTeamPayGroup: "employments,home_location,team,pay_group",
    EmploymentsHomeLocationWorkLocation: "employments,home_location,work_location",
    EmploymentsHomeLocationWorkLocationCompany: "employments,home_location,work_location,company",
    EmploymentsHomeLocationWorkLocationCompanyPayGroup: "employments,home_location,work_location,company,pay_group",
    EmploymentsHomeLocationWorkLocationManager: "employments,home_location,work_location,manager",
    EmploymentsHomeLocationWorkLocationManagerCompany: "employments,home_location,work_location,manager,company",
    EmploymentsHomeLocationWorkLocationManagerCompanyPayGroup:
        "employments,home_location,work_location,manager,company,pay_group",
    EmploymentsHomeLocationWorkLocationManagerPayGroup: "employments,home_location,work_location,manager,pay_group",
    EmploymentsHomeLocationWorkLocationManagerTeam: "employments,home_location,work_location,manager,team",
    EmploymentsHomeLocationWorkLocationManagerTeamCompany:
        "employments,home_location,work_location,manager,team,company",
    EmploymentsHomeLocationWorkLocationManagerTeamCompanyPayGroup:
        "employments,home_location,work_location,manager,team,company,pay_group",
    EmploymentsHomeLocationWorkLocationManagerTeamPayGroup:
        "employments,home_location,work_location,manager,team,pay_group",
    EmploymentsHomeLocationWorkLocationPayGroup: "employments,home_location,work_location,pay_group",
    EmploymentsHomeLocationWorkLocationTeam: "employments,home_location,work_location,team",
    EmploymentsHomeLocationWorkLocationTeamCompany: "employments,home_location,work_location,team,company",
    EmploymentsHomeLocationWorkLocationTeamCompanyPayGroup:
        "employments,home_location,work_location,team,company,pay_group",
    EmploymentsHomeLocationWorkLocationTeamPayGroup: "employments,home_location,work_location,team,pay_group",
    EmploymentsManager: "employments,manager",
    EmploymentsManagerCompany: "employments,manager,company",
    EmploymentsManagerCompanyPayGroup: "employments,manager,company,pay_group",
    EmploymentsManagerPayGroup: "employments,manager,pay_group",
    EmploymentsManagerTeam: "employments,manager,team",
    EmploymentsManagerTeamCompany: "employments,manager,team,company",
    EmploymentsManagerTeamCompanyPayGroup: "employments,manager,team,company,pay_group",
    EmploymentsManagerTeamPayGroup: "employments,manager,team,pay_group",
    EmploymentsPayGroup: "employments,pay_group",
    EmploymentsTeam: "employments,team",
    EmploymentsTeamCompany: "employments,team,company",
    EmploymentsTeamCompanyPayGroup: "employments,team,company,pay_group",
    EmploymentsTeamPayGroup: "employments,team,pay_group",
    EmploymentsWorkLocation: "employments,work_location",
    EmploymentsWorkLocationCompany: "employments,work_location,company",
    EmploymentsWorkLocationCompanyPayGroup: "employments,work_location,company,pay_group",
    EmploymentsWorkLocationManager: "employments,work_location,manager",
    EmploymentsWorkLocationManagerCompany: "employments,work_location,manager,company",
    EmploymentsWorkLocationManagerCompanyPayGroup: "employments,work_location,manager,company,pay_group",
    EmploymentsWorkLocationManagerPayGroup: "employments,work_location,manager,pay_group",
    EmploymentsWorkLocationManagerTeam: "employments,work_location,manager,team",
    EmploymentsWorkLocationManagerTeamCompany: "employments,work_location,manager,team,company",
    EmploymentsWorkLocationManagerTeamCompanyPayGroup: "employments,work_location,manager,team,company,pay_group",
    EmploymentsWorkLocationManagerTeamPayGroup: "employments,work_location,manager,team,pay_group",
    EmploymentsWorkLocationPayGroup: "employments,work_location,pay_group",
    EmploymentsWorkLocationTeam: "employments,work_location,team",
    EmploymentsWorkLocationTeamCompany: "employments,work_location,team,company",
    EmploymentsWorkLocationTeamCompanyPayGroup: "employments,work_location,team,company,pay_group",
    EmploymentsWorkLocationTeamPayGroup: "employments,work_location,team,pay_group",
    Groups: "groups",
    GroupsCompany: "groups,company",
    GroupsCompanyPayGroup: "groups,company,pay_group",
    GroupsHomeLocation: "groups,home_location",
    GroupsHomeLocationCompany: "groups,home_location,company",
    GroupsHomeLocationCompanyPayGroup: "groups,home_location,company,pay_group",
    GroupsHomeLocationManager: "groups,home_location,manager",
    GroupsHomeLocationManagerCompany: "groups,home_location,manager,company",
    GroupsHomeLocationManagerCompanyPayGroup: "groups,home_location,manager,company,pay_group",
    GroupsHomeLocationManagerPayGroup: "groups,home_location,manager,pay_group",
    GroupsHomeLocationManagerTeam: "groups,home_location,manager,team",
    GroupsHomeLocationManagerTeamCompany: "groups,home_location,manager,team,company",
    GroupsHomeLocationManagerTeamCompanyPayGroup: "groups,home_location,manager,team,company,pay_group",
    GroupsHomeLocationManagerTeamPayGroup: "groups,home_location,manager,team,pay_group",
    GroupsHomeLocationPayGroup: "groups,home_location,pay_group",
    GroupsHomeLocationTeam: "groups,home_location,team",
    GroupsHomeLocationTeamCompany: "groups,home_location,team,company",
    GroupsHomeLocationTeamCompanyPayGroup: "groups,home_location,team,company,pay_group",
    GroupsHomeLocationTeamPayGroup: "groups,home_location,team,pay_group",
    GroupsHomeLocationWorkLocation: "groups,home_location,work_location",
    GroupsHomeLocationWorkLocationCompany: "groups,home_location,work_location,company",
    GroupsHomeLocationWorkLocationCompanyPayGroup: "groups,home_location,work_location,company,pay_group",
    GroupsHomeLocationWorkLocationManager: "groups,home_location,work_location,manager",
    GroupsHomeLocationWorkLocationManagerCompany: "groups,home_location,work_location,manager,company",
    GroupsHomeLocationWorkLocationManagerCompanyPayGroup:
        "groups,home_location,work_location,manager,company,pay_group",
    GroupsHomeLocationWorkLocationManagerPayGroup: "groups,home_location,work_location,manager,pay_group",
    GroupsHomeLocationWorkLocationManagerTeam: "groups,home_location,work_location,manager,team",
    GroupsHomeLocationWorkLocationManagerTeamCompany: "groups,home_location,work_location,manager,team,company",
    GroupsHomeLocationWorkLocationManagerTeamCompanyPayGroup:
        "groups,home_location,work_location,manager,team,company,pay_group",
    GroupsHomeLocationWorkLocationManagerTeamPayGroup: "groups,home_location,work_location,manager,team,pay_group",
    GroupsHomeLocationWorkLocationPayGroup: "groups,home_location,work_location,pay_group",
    GroupsHomeLocationWorkLocationTeam: "groups,home_location,work_location,team",
    GroupsHomeLocationWorkLocationTeamCompany: "groups,home_location,work_location,team,company",
    GroupsHomeLocationWorkLocationTeamCompanyPayGroup: "groups,home_location,work_location,team,company,pay_group",
    GroupsHomeLocationWorkLocationTeamPayGroup: "groups,home_location,work_location,team,pay_group",
    GroupsManager: "groups,manager",
    GroupsManagerCompany: "groups,manager,company",
    GroupsManagerCompanyPayGroup: "groups,manager,company,pay_group",
    GroupsManagerPayGroup: "groups,manager,pay_group",
    GroupsManagerTeam: "groups,manager,team",
    GroupsManagerTeamCompany: "groups,manager,team,company",
    GroupsManagerTeamCompanyPayGroup: "groups,manager,team,company,pay_group",
    GroupsManagerTeamPayGroup: "groups,manager,team,pay_group",
    GroupsPayGroup: "groups,pay_group",
    GroupsTeam: "groups,team",
    GroupsTeamCompany: "groups,team,company",
    GroupsTeamCompanyPayGroup: "groups,team,company,pay_group",
    GroupsTeamPayGroup: "groups,team,pay_group",
    GroupsWorkLocation: "groups,work_location",
    GroupsWorkLocationCompany: "groups,work_location,company",
    GroupsWorkLocationCompanyPayGroup: "groups,work_location,company,pay_group",
    GroupsWorkLocationManager: "groups,work_location,manager",
    GroupsWorkLocationManagerCompany: "groups,work_location,manager,company",
    GroupsWorkLocationManagerCompanyPayGroup: "groups,work_location,manager,company,pay_group",
    GroupsWorkLocationManagerPayGroup: "groups,work_location,manager,pay_group",
    GroupsWorkLocationManagerTeam: "groups,work_location,manager,team",
    GroupsWorkLocationManagerTeamCompany: "groups,work_location,manager,team,company",
    GroupsWorkLocationManagerTeamCompanyPayGroup: "groups,work_location,manager,team,company,pay_group",
    GroupsWorkLocationManagerTeamPayGroup: "groups,work_location,manager,team,pay_group",
    GroupsWorkLocationPayGroup: "groups,work_location,pay_group",
    GroupsWorkLocationTeam: "groups,work_location,team",
    GroupsWorkLocationTeamCompany: "groups,work_location,team,company",
    GroupsWorkLocationTeamCompanyPayGroup: "groups,work_location,team,company,pay_group",
    GroupsWorkLocationTeamPayGroup: "groups,work_location,team,pay_group",
    HomeLocation: "home_location",
    HomeLocationCompany: "home_location,company",
    HomeLocationCompanyPayGroup: "home_location,company,pay_group",
    HomeLocationManager: "home_location,manager",
    HomeLocationManagerCompany: "home_location,manager,company",
    HomeLocationManagerCompanyPayGroup: "home_location,manager,company,pay_group",
    HomeLocationManagerPayGroup: "home_location,manager,pay_group",
    HomeLocationManagerTeam: "home_location,manager,team",
    HomeLocationManagerTeamCompany: "home_location,manager,team,company",
    HomeLocationManagerTeamCompanyPayGroup: "home_location,manager,team,company,pay_group",
    HomeLocationManagerTeamPayGroup: "home_location,manager,team,pay_group",
    HomeLocationPayGroup: "home_location,pay_group",
    HomeLocationTeam: "home_location,team",
    HomeLocationTeamCompany: "home_location,team,company",
    HomeLocationTeamCompanyPayGroup: "home_location,team,company,pay_group",
    HomeLocationTeamPayGroup: "home_location,team,pay_group",
    HomeLocationWorkLocation: "home_location,work_location",
    HomeLocationWorkLocationCompany: "home_location,work_location,company",
    HomeLocationWorkLocationCompanyPayGroup: "home_location,work_location,company,pay_group",
    HomeLocationWorkLocationManager: "home_location,work_location,manager",
    HomeLocationWorkLocationManagerCompany: "home_location,work_location,manager,company",
    HomeLocationWorkLocationManagerCompanyPayGroup: "home_location,work_location,manager,company,pay_group",
    HomeLocationWorkLocationManagerPayGroup: "home_location,work_location,manager,pay_group",
    HomeLocationWorkLocationManagerTeam: "home_location,work_location,manager,team",
    HomeLocationWorkLocationManagerTeamCompany: "home_location,work_location,manager,team,company",
    HomeLocationWorkLocationManagerTeamCompanyPayGroup: "home_location,work_location,manager,team,company,pay_group",
    HomeLocationWorkLocationManagerTeamPayGroup: "home_location,work_location,manager,team,pay_group",
    HomeLocationWorkLocationPayGroup: "home_location,work_location,pay_group",
    HomeLocationWorkLocationTeam: "home_location,work_location,team",
    HomeLocationWorkLocationTeamCompany: "home_location,work_location,team,company",
    HomeLocationWorkLocationTeamCompanyPayGroup: "home_location,work_location,team,company,pay_group",
    HomeLocationWorkLocationTeamPayGroup: "home_location,work_location,team,pay_group",
    Manager: "manager",
    ManagerCompany: "manager,company",
    ManagerCompanyPayGroup: "manager,company,pay_group",
    ManagerPayGroup: "manager,pay_group",
    ManagerTeam: "manager,team",
    ManagerTeamCompany: "manager,team,company",
    ManagerTeamCompanyPayGroup: "manager,team,company,pay_group",
    ManagerTeamPayGroup: "manager,team,pay_group",
    PayGroup: "pay_group",
    Team: "team",
    TeamCompany: "team,company",
    TeamCompanyPayGroup: "team,company,pay_group",
    TeamPayGroup: "team,pay_group",
    WorkLocation: "work_location",
    WorkLocationCompany: "work_location,company",
    WorkLocationCompanyPayGroup: "work_location,company,pay_group",
    WorkLocationManager: "work_location,manager",
    WorkLocationManagerCompany: "work_location,manager,company",
    WorkLocationManagerCompanyPayGroup: "work_location,manager,company,pay_group",
    WorkLocationManagerPayGroup: "work_location,manager,pay_group",
    WorkLocationManagerTeam: "work_location,manager,team",
    WorkLocationManagerTeamCompany: "work_location,manager,team,company",
    WorkLocationManagerTeamCompanyPayGroup: "work_location,manager,team,company,pay_group",
    WorkLocationManagerTeamPayGroup: "work_location,manager,team,pay_group",
    WorkLocationPayGroup: "work_location,pay_group",
    WorkLocationTeam: "work_location,team",
    WorkLocationTeamCompany: "work_location,team,company",
    WorkLocationTeamCompanyPayGroup: "work_location,team,company,pay_group",
    WorkLocationTeamPayGroup: "work_location,team,pay_group",
} as const;