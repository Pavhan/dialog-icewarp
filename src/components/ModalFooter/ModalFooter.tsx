import clsx from "clsx";
import React from "react";

interface ModalFooterProps {
  text?: string;
  children: React.ReactNode;
}

export const ModalFooter = ({ text, children }: ModalFooterProps) => {
  return <div className={clsx("p-4 border-t border-gray-200 empty:hidden", {"flex gap-4 items-center flex-wrap sm:flex-nowrap": text})}>
      {text && <p className="text-gray-500 text-sm grow">{text}</p>}
      {children}
    </div>
}