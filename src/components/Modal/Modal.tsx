import React from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ openModal, closeModal, children }: ModalProps) => {
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
      <button onClick={closeModal} className="absolute top-0 text-violet-600 hover:text-violet-800 right-0 p-1 transition">
        <XMarkIcon className="size-5"/>
        <span className="sr-only">Close</span>
      </button>
    </dialog>
  );
}