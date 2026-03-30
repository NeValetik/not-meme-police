import { ReactNode } from "react";
import AliasView from "./AliasView";

export const enum ClientGame {
  Alias = "alias",
}

export const clientGameRooms = {
  [ClientGame.Alias]: AliasView,
}
