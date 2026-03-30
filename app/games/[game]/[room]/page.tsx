import { FC } from "react";
import { ClientGame } from "@/views/GameViews/types";
import { getClientGameRoom } from "@/views/GameViews/utils";

interface RoomPageProps {
  params: {
    game: string;
    room: string;
  };
}

const RoomPage:FC<RoomPageProps> = async (props) => {
  const { game, ...restParams } = await props.params;
  const ClientGameView = getClientGameRoom(game);
  if (!ClientGameView) {
    return <div>Game not found</div>;
  }
  return (
    <div>
      <ClientGameView {...restParams} />
    </div>
  );
}

export default RoomPage;