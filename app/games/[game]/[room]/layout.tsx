import { FC } from "react";

const GameLayout:FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default GameLayout;