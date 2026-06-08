import { ReactNode } from "react";
import CandidateSidebar from "./CandidateSidebar";
import Topbar from "./Topbar";

interface CandidateLayoutProps {
  children: ReactNode;
}

export default function CandidateLayout({
  children,
}: CandidateLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950">
      <CandidateSidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}