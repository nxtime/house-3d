import { ReactNode } from "react";
import { Header } from "./header.component";
import Tooltip from "./tooltip.component";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col flex-1 h-full items-center gap-4 text-zinc-200">
      <Header />
      <Tooltip />
      {children}
    </div>
  );
};
