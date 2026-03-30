import { FC } from "react";
import { getClientGameRoom } from "@/views/GameViews/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <Button asChild variant="outline">
        <Link href={`/games`}>Alias</Link>
      </Button>
      <ClientGameView {...restParams} />
    </div>
  );
}

export default RoomPage;