import React from "react";

export const Modal = ({ openModal, closeModal, children }) => {
  const ref = React.useRef();

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