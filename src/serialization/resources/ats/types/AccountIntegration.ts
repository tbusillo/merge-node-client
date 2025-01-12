/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountIntegration: core.serialization.ObjectSchema<
    serializers.ats.AccountIntegration.Raw,
    Merge.ats.AccountIntegration
> = core.serialization.object({
    name: core.serialization.string(),
    categories: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).ats.CategoriesEnum))
        .optional(),
    image: core.serialization.string().optional(),
    squareImage: core.serialization.property("square_image", core.serialization.string().optional()),
    color: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    isInBeta: core.serialization.property("is_in_beta", core.serialization.boolean().optional()),
    apiEndpointsToDocumentationUrls: core.serialization.property(
        "api_endpoints_to_documentation_urls",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace AccountIntegration {
    interface Raw {
        name: string;
        categories?: serializers.ats.CategoriesEnum.Raw[] | null;
        image?: string | null;
        square_image?: string | null;
        color?: string | null;
        slug?: string | null;
        is_in_beta?: boolean | null;
        api_endpoints_to_documentation_urls?: Record<string, unknown> | null;
    }
}
