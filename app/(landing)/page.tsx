import Link from "next/link";
import { FC } from "react";

const HomePage:FC<{}> = () => {
  return (
    <div className="">
      <Link href="/games/alias/room1">Alias</Link>
    </div>
  );
}

export default HomePage;