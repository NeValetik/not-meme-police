import { FC } from "react";

const AliasView:FC<{room: string}> = (props) => {
  const { room } = props;
  console.log(room);
  return (
    <div>
      <h1>Alias View</h1>
      <p>Room: {room}</p>
    </div>
  )
}

export default AliasView;