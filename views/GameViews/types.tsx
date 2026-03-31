import AliasView from "./AliasView";
import WormleView from "./WormleView";

export enum ClientGame {
  Alias = "alias",
  Wormle = "wormle",
}

export const clientGameRooms = {
  [ClientGame.Alias]: AliasView,
  [ClientGame.Wormle]: WormleView,
}
