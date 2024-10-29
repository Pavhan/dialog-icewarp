import React from "react";
import { Modal } from "../Modal/Modal";

export const Page = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setModal(true)}
      >
        Open modal
      </button>
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
      >
        Modal content.
      </Modal>
    </>
  )
};
