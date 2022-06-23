import { FIVE_SECONDS } from "@walletconnect/time";

export const SERVER_LOGGER = {
  levels: ["trace", "debug", "info", "warn", "error", "fatal", "silent"],
};

export const SERVER_CONTEXT = "relay";

export const SERVER_EVENTS = {
  beat: "server_beat",
};

export const SERVER_BEAT_INTERVAL = FIVE_SECONDS * 1000;
