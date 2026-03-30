import { Toaster } from "@/components/ui/sonner";
import { FC } from "react";

const CoreLayout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  )
}

export default CoreLayout;