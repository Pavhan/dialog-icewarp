import React from "react";

interface ModalFooterProps {
  text?: string;
  children: React.ReactNode;
}

export const ModalFooter = ({ text, children }: ModalFooterProps) => {
  return  <div className="p-4 flex gap-4 border-t items-center flex-wrap border-gray-200 empty:hidden">
      {text &&<p className="text-gray-500 text-sm">{text}</p>}
      {children}
    </div>
}