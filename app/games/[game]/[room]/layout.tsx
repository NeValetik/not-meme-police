'use client';

import { FC, useState } from "react";
import { useParams } from "next/navigation";
import ConnectDialog from "@/views/GamesPageView/components/ConnectDialog";
import { toast } from "sonner";

const GameLayout:FC<{children: React.ReactNode}> = ({ children }) => {
  const { game, room } = useParams();

  const [ connetOpen, setConnectOpen ] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return !localStorage.getItem("name");
  });

  const handleSubmit = ({ name }: { name?: string }) => {
    if (!name) {
      toast.error('Введите имя');
      return;
    }
    localStorage.setItem('name', name || '');
    setConnectOpen(false);
  }
  return (
    <div>
      {children}
      {connetOpen && 
        <ConnectDialog 
          game={game as string}
          roomIdProp={room as string}
          isOpen={connetOpen} 
          onOpenChange={setConnectOpen} 
          handleSubmit={handleSubmit} 
        />
      }
    </div>
  )
}

export default GameLayout;