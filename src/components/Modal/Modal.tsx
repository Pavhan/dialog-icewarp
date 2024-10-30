import React from "react";

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
      className="bg-gray-300 border border-gray-500 rounded-lg shadow-lg w-[500px] max-w-full backdrop:opacity-1 backdrop:bg-slate-500/80"
    >
      {children}
      <button onClick={closeModal}>
        Close
      </button>
    </dialog>
  );
}