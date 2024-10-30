import React from "react";
import { Modal } from "../Modal/Modal";
import { Button, ButtonProps } from "../Button/Button";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalContent } from "../ModalContent/ModalContent";
import { ModalFooter } from "../ModalFooter/ModalFooter";
import { Heading } from "../Heading/Heading";
import { GroupButtons } from "../GroupButtons/GroupButtons";

interface ModalWrapperProps {
  description: string;
  title: string;
  icon: JSX.Element;
  headerButtons?: ButtonProps[];
  content: string[];
  footerText?: string;
  footerButtons?: ButtonProps[];
}

export const ModalWrapper = ({description, title, icon, headerButtons, content, footerText, footerButtons}: ModalWrapperProps) => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <div className="flex gap-5 items-center justify-between mb-5">
        <p className="text-lg">- {description}</p>
        <Button onClick={() => setModal(true)} text="Open modal" />
      </div>

      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
      >
        <ModalHeader>
          <Heading icon={icon} text={title} />
          <GroupButtons buttons={headerButtons}/>
        </ModalHeader>
        <ModalContent content={content} />
        <ModalFooter text={footerText}>
          <GroupButtons buttons={footerButtons} expadableButtonWidth={true} />
        </ModalFooter>
      </Modal>
    </>
  )	
};
