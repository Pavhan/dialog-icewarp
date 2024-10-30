import React from "react";

interface ModalFooterProps {
  text?: string;
  children: React.ReactNode;
}

export const ModalFooter = ({ text, children }: ModalFooterProps) => {
  return !children && !text ? null : <div className="p-4 flex gap-4 border-t border-gray-200 flex-wrap md:flex-nowrap">
      {text &&<p className="text-gray-500 text-sm">{text}</p>}
      {children}
    </div>
}