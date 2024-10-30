import React from "react";

interface ButotnProps {
  children: React.ReactNode;
}

export const Button = ({ children } : ButotnProps) => {
  return (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-blue-800 text-white hover:bg-blue-800/80 h-10 px-4 py-2">
        {children}
      </button>
  );
}