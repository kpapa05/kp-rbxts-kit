import { type OnInit, Service } from "@flamework/core";
import CharmSync from "@rbxts/charm-sync";
import { Message, messaging } from "shared/net";
import { atoms } from "shared/store";

/**
 * Server-side singleton responsible for handling state synchronization.
 */
@Service({})
export class CharmService implements OnInit {
	public onInit() {
		const syncer = CharmSync.server({ atoms });

		// When the store changes, send the updated state to the player
		syncer.connect((player, payload) => {
			messaging.client.emit(player, Message.StoreSyncState, {
				payload,
			});
		});

		// Listen for immediate state requests from clients
		messaging.server.on(Message.StoreRequestState, (player) => {
			syncer.hydrate(player);
		});
	}
}
