import { FC } from "react";
import TeamsSection from "./components/TeamsSection";
import GameSection from "./components/GameSection";

const AliasView:FC<{room: string}> = (props) => {
  const { room } = props;
  return (
    <div className="flex flex-1 flex-col h-full min-h-0">
      <p>Room: {room}</p>
      <div className="flex flex-col flex-1 min-h-0 items-center justify-between">
        <div>
          <TeamsSection />
        </div>
        <div>
          <GameSection />
        </div>
      </div>
    </div>
  )
}

export default AliasView;