import { ClientGame, clientGameRooms } from "./types";

const isClientGameRoomKey = (
  game: ClientGame | string
): game is keyof typeof clientGameRooms => {
  return Object.prototype.hasOwnProperty.call(clientGameRooms, game);
};

type ClientGameRoomKey = keyof typeof clientGameRooms;
type ClientGameRoomComponent<T extends ClientGameRoomKey> =
  (typeof clientGameRooms)[T];

export function getClientGameRoom<T extends ClientGameRoomKey>(
  game: T
): ClientGameRoomComponent<T>;
export function getClientGameRoom(
  game: ClientGame | string
): ClientGameRoomComponent<ClientGameRoomKey> | undefined;
export function getClientGameRoom(game: ClientGame | string) {
  if (!isClientGameRoomKey(game)) return undefined;
  return clientGameRooms[game];
}