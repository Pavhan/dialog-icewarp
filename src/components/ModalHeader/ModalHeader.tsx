import clsx from "clsx";
import React from "react";

interface ModalHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalHeader = ({ className, children }: ModalHeaderProps) => {
  return (
    <div className={clsx("pl-4 py-4 flex gap-5 items-center justify-between flex-wrap sm:flex-nowrap border-b border-gray-200", className)}>
      {children}
    </div>
  );
}