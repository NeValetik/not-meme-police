import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/ui/button";

const HomePage:FC<{}> = () => {
  return (
    <div className="">
      <Button asChild variant="outline">
        <Link href="/games">Games</Link>
      </Button>
    </div>
  );
}

export default HomePage;