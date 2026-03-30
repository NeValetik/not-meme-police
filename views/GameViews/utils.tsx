import { FC, ReactNode } from "react";
import { ClientGame, clientGameRooms } from "./types";

const isClientGameRoomKey = (
  game: ClientGame | string
): game is keyof typeof clientGameRooms => {
  return Object.prototype.hasOwnProperty.call(clientGameRooms, game);
};

export const getClientGameRoom = (
  game: ClientGame | string
): FC<{ [key: string]: string }> | undefined => {
  if (!isClientGameRoomKey(game)) return undefined;
  return clientGameRooms[game];
};