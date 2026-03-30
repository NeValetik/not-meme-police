'use client';

import { ClientGame } from "@/views/GameViews/types";
import { FC, ReactNode } from "react";
import { generateRoomId } from "../../utils";
import { Button } from "@/components/ui/button";
import ConnectDialog from "../ConnectDialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface GameCardProps {
  game: ClientGame;
  label: string;
  icon: ReactNode;
}

const GameCard:FC<GameCardProps> = ({ game, label, icon }) => {
  const { push } = useRouter();

  const handleRedirect = async () => {
    const newRoomId = await generateRoomId();
    push(`/games/${game.toLowerCase()}/${newRoomId}`);
  };

  const handleSubmit = ({ game, roomId, name }: { game: string; roomId?: string; name?: string }) => {
    if (!name || !roomId) {
      toast.error('Введите имя и название комнаты');
      return;
    }
    localStorage.setItem('name', name || '');
    push(`/games/${game.toLowerCase()}/${roomId}`);
  };

  return (
    <div className="flex flex-col gap-2 bg-accent max-w-3xs p-2">
      <div className="flex items-center gap-2 justify-between px-4">
        <h3>{label}</h3>
        {icon}
      </div>
      <div className="flex gap-2">
        <Button className="flex-1" onClick={handleRedirect} variant="default" color="secondary" size="sm">Создать</Button>
        <ConnectDialog game={game} handleSubmit={handleSubmit}/>
      </div>
    </div>
  ); 
}

export default GameCard;