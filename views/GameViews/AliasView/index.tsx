import { FC } from "react";

const AliasView:FC<{room: string}> = (props) => {
  const { room } = props;
  return (
    <div>
      <p>Room: {room}</p>
    </div>
  )
}

export default AliasView;