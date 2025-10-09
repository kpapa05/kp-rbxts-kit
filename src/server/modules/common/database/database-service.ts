import { type OnStart, Service } from "@flamework/core";
import {
	createPlayerStore,
	MockDataStoreService,
	MockMemoryStoreService,
} from "@rbxts/lyra";
import {
	DataStoreService,
	MemoryStoreService,
	Players,
	RunService,
} from "@rbxts/services";
import { DatabaseRuntimeSchema } from "./database-schema";
import { DatabaseTemplate } from "./database-template";

/**
 * Server-side singleton responsible for handling player data persistence.
 */
@Service()
export class DatabaseService implements OnStart {
	public store = createPlayerStore({
		name: "LYRA_PLAYER_DATA",
		template: DatabaseTemplate,
		schema: DatabaseRuntimeSchema,
		dataStoreService: this.getDataStoreService(),
		memoryStoreService: this.getMemoryStoreService(),
		migrationSteps: [],
	});

	private getDataStoreService() {
		return RunService.IsStudio()
			? new MockDataStoreService()
			: DataStoreService;
	}

	private getMemoryStoreService() {
		return RunService.IsStudio()
			? new MockMemoryStoreService()
			: MemoryStoreService;
	}

	public onStart() {
		game.BindToClose(() => this.store.closeAsync());
		Players.PlayerAdded.Connect((player) => this.store.loadAsync(player));
		Players.PlayerRemoving.Connect((player) => this.store.unloadAsync(player));

		for (const player of Players.GetPlayers()) {
			task.spawn(() => this.store.loadAsync(player));
		}
	}
}
