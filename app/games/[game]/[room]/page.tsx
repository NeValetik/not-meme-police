import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { clientGameRooms } from "@/views/GameViews/types";

interface RoomPageProps {
  params: {
    game: string;
    room: string;
  };
}

const RoomPage = async (props: RoomPageProps) => {
  const { game, room } = await props.params;
  const GameView = clientGameRooms[game as keyof typeof clientGameRooms];

  if (!GameView) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button asChild variant="outline">
          <Link href={`/games`}>
            <ArrowLeftIcon size={16} />
            <span>Back</span>
          </Link>
        </Button>
      </div>
      <GameView room={room} />
    </div>
  );
}

export default RoomPage;