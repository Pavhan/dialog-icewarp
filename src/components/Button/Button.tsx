import React from "react";
import { clsx } from 'clsx';

interface ButotnProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', onClick, children } : ButotnProps) => {
  return (
      <button onClick={onClick} className={clsx('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 border focus-visible:ring-ring px-4 py-2 transition-background', {
        'bg-violet-800 text-white hover:bg-violet-800/80 border:bg-violet-800': variant === 'primary',
        'bg-white text-gray-800 hover:bg-gray-200 border-gray-200': variant === 'secondary',
      })}>
        {children}
      </button>
  );
}