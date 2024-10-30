import React from "react";
import { clsx } from 'clsx';

export interface ButtonProps {
  variant?: "ghost" | "primary" | "danger";
  text: string;
  expandableWidth?: boolean;
  onClick?: () => void;
}

export const Button = ({ variant = 'ghost', text, expandableWidth, onClick } : ButtonProps) => {
  return (
      <button onClick={onClick} className={clsx('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 border focus-visible:ring-ring px-4 py-2 transition-background', {
        'bg-violet-800 text-white hover:bg-violet-800/80 border:bg-violet-800': variant === 'primary',
        'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200': variant === 'ghost',
        'bg-red-700 text-white hover:bg-red-900 border-red-700 hover:border-red-900': variant === 'danger',
        'flex-grow': expandableWidth
      })}>
        {text}
      </button>
  );
}