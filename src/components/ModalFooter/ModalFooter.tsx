import React from "react";

interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div className="p-4 bg-slate-400">
      {children}
    </div>
  );
}