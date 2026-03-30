import AliasView from "./AliasView";

export enum ClientGame {
  Alias = "alias",
}

export const clientGameRooms = {
  [ClientGame.Alias]: AliasView,
}
