/**
 * IMPORTANT: DO NOT ENTER ANY SENSITIVE INFORMATION IN THIS FILE!
 *
 * All environment variables are exposed to the client and are therefore public.
 * Use this file only for non-sensitive configuration variables, such as for
 * differentiating between development and production environments.
 *
 * If you are looking to store sensitive information, you should be using
 * Roblox's secrets management instead:
 *
 * https://create.roblox.com/docs/cloud-services/secrets
 *
 */

import { t } from "@rbxts/t";
import { $env } from "rbxts-transform-env";

type EnvironmentStaticSchema = t.static<typeof EnvironmentRuntimeSchema>;
const EnvironmentRuntimeSchema = t.strictInterface({
	NODE_ENV: t.union(t.literal("development"), t.literal("production")),
	PLACE_ENV: t.union(t.literal("game"), t.literal("lobby")),
});

export const env: EnvironmentStaticSchema = {
	NODE_ENV: $env.string("NODE_ENV") as EnvironmentStaticSchema["NODE_ENV"],
	PLACE_ENV: $env.string("PLACE_ENV") as EnvironmentStaticSchema["PLACE_ENV"],
};

assert(EnvironmentRuntimeSchema(env), "Invalid environment variables");
