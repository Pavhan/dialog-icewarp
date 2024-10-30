import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ModalProps {
  openModal: boolean;
  showCloseButton?: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ openModal, closeModal, showCloseButton = false, children }: ModalProps) => {
  const ref = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className="relative bg-white border rounded-lg w-[500px] max-w-full backdrop:opacity-1 backdrop:bg-slate-500/80"
    >
      {children}
      {showCloseButton ? <button onClick={closeModal} className="absolute top-2 text-violet-600  hover:text-violet-800 right-2 p-1 rounded-full transition">
        <XMarkIcon className="size-7"/>
        <span className="sr-only">Close</span>
      </button> : null}
    </dialog>
  );
}