import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

const GamesPage:FC<{} > = () => {
  return (
    <div>
      <Button asChild variant="outline">
        <Link href="/games/alias/room1">Alias</Link>
      </Button>
    </div>
  );
};

export default GamesPage;