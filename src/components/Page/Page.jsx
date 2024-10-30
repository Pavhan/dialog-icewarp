import React from "react";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalContent } from "../ModalContent/ModalContent";
import { ModalFooter } from "../ModalFooter/ModalFooter";

export const Page = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setModal(true)}
      >
        Open modal
      </Button>
      
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
      >
        <ModalHeader></ModalHeader>
        <ModalContent>Are you really sure you want to delete this item?</ModalContent>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  )
};
