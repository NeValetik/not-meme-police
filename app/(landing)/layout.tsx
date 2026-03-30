import { FC } from "react";

const LandingLayout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default LandingLayout;