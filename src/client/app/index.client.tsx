import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { env } from "shared/utils/env";
import { GameApp } from "./game-app";
import { LobbyApp } from "./lobby-app";

const root = createRoot(new Instance("Folder"));
const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

root.render(
	<StrictMode>
		{createPortal(
			env.PLACE_ENV === "game" ? <GameApp /> : <LobbyApp />,
			playerGui,
		)}
	</StrictMode>,
);
