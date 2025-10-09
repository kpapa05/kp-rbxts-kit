import { t } from "@rbxts/t";

export type DatabaseStaticSchema = t.static<typeof DatabaseRuntimeSchema>;
export const DatabaseRuntimeSchema = t.strictInterface({});
