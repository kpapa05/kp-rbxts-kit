import type { StoreMessageData } from "./store";

export const enum Message {
	StoreRequestState,
	StoreSyncState,
}

export interface MessageData extends StoreMessageData {}
