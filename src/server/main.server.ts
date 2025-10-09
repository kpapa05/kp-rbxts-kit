import { Flamework } from "@flamework/core";
import { env } from "shared/utils/env";

if (env.PLACE_ENV === "game") {
	Flamework.addPaths("src/server/modules/common");
	Flamework.addPaths("src/server/modules/game");
	Flamework.ignite();
} else if (env.PLACE_ENV === "lobby") {
	Flamework.addPaths("src/server/modules/common");
	Flamework.addPaths("src/server/modules/lobby");
	Flamework.ignite();
}
