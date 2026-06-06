import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
      <h1 className="text-3xl font-bold mb-2">
        {title}
      </h1>

      <p className="text-gray-600 dark:text-slate-400 mb-8">
        {subtitle}
      </p>

      {children}
    </div>
  );
}