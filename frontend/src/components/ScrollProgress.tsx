"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(percentage);
    }

    window.addEventListener(
      "scroll",
      updateProgress
    );

    updateProgress();

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}