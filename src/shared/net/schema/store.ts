import type { SyncPayload } from "@rbxts/charm-sync";
import type { atoms } from "shared/store";
import { Message } from ".";

export interface StoreMessageData {
	[Message.StoreRequestState]: {};
	[Message.StoreSyncState]: {
		readonly payload: SyncPayload<typeof atoms>;
	};
}
