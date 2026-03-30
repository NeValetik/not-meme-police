import { FC } from "react";

const CoreLayout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default CoreLayout;