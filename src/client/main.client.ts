import { Flamework } from "@flamework/core";
import { env } from "shared/utils/env";

if (env.PLACE_ENV === "game") {
	Flamework.addPaths("src/client/modules/common");
	Flamework.addPaths("src/client/modules/game");
	Flamework.ignite();
} else if (env.PLACE_ENV === "lobby") {
	Flamework.addPaths("src/client/modules/common");
	Flamework.addPaths("src/client/modules/lobby");
	Flamework.ignite();
}
