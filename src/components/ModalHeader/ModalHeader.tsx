import React from "react";

interface ModalHeaderProps {
  children: React.ReactNode;
}

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <div className="py-4 pl-4 pr-7 flex gap-2 items-center justify-between flex-wrap border-b border-gray-200">
      {children}
    </div>
  );
}