import { Toaster } from "@/components/ui/sonner";
import { FC } from "react";

const CoreLayout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Toaster />
      <div className="flex flex-col md:p-6 p-4 w-full min-h-screen">
        {children}
      </div>
    </>
  )
}

export default CoreLayout;