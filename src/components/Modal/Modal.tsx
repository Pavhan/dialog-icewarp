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
    >
      {children}
      <button onClick={closeModal}>
        Close
      </button>
    </dialog>
  );
}