import { Controller, type OnInit } from "@flamework/core";
import CharmSync from "@rbxts/charm-sync";
import { Message, messaging } from "shared/net";
import { atoms } from "shared/store";

/**
 * Client-side singleton responsible for handling state synchronization.
 */
@Controller({})
export class CharmController implements OnInit {
	public onInit() {
		const syncer = CharmSync.client({ atoms });

		// Listen for state sync messages from the server
		messaging.client.on(Message.StoreSyncState, (data) => {
			syncer.sync(data.payload);
		});

		// Request the initial state from the server
		messaging.server.emit(Message.StoreRequestState, {});
	}
}
