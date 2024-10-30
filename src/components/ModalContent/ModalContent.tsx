import React from "react";

interface ModalContentProps {
  children: React.ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className="px-4 py-8 bg-white min-h-48">
      <p>{children}</p>
    </div>
  );
}