import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FC } from "react";

const HomePage:FC = () => {
  return (
    <div className="">
      <Button asChild variant="outline">
        <Link href="/games">Games</Link>
      </Button>
    </div>
  );
}

export default HomePage;