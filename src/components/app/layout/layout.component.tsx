import { ReactNode } from "react";
import { Header } from "./header.component";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col flex-1 h-full items-center gap-4 text-zinc-200">
      <Header />
      {children}
    </div>
  );
};
