import { MessageEmitter } from "@rbxts/tether";
import type { MessageData } from "./schema";

export { Message } from "./schema";
export const messaging = MessageEmitter.create<MessageData>();
