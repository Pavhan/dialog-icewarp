import React from "react";

interface ModalHeaderProps {
  children: React.ReactNode;
}

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <div className="p-4 bg-slate-400">
      {children}
    </div>
  );
}