import { ClientGame } from "@/views/GameViews/types";
import GameCard from "../GameCard";
import { FC } from "react";
import { GamepadIcon } from "@/components/ui/gamepad-icon";

const GamesList:FC = () => {
  const games = Object.values(ClientGame).map((game) => {
    return {
      game,
      label: game[0].toUpperCase() + game.slice(1),
      icon: <GamepadIcon className="size-6" />,
    }
  });

  console.log(games);

  return (
    <div>
      {games.map(({ game, label, icon }) => (
        <GameCard key={game} game={game} label={label} icon={icon} />
      ))}
    </div>
  )
}

export default GamesList;