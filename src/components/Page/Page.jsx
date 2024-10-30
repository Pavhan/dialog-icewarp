import React from "react";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalContent } from "../ModalContent/ModalContent";
import { ModalFooter } from "../ModalFooter/ModalFooter";
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { Heading } from "../Heading/Heading";
import { GroupButtons } from "../GroupButtons/GroupButtons";

export const Page = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Button onClick={() => setModal(true)} text="Open modal" />

      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
      >
        <ModalHeader>
          <Heading icon={<InformationCircleIcon />} text="Action Confirmation" />
          <GroupButtons buttons={[
            { text: 'Help'},
            { text: 'Detail'},
            { text: 'Report'},
          ]}/>
          
        </ModalHeader>
        <ModalContent content={['Are you sure you want to proceed with this action?', 'This change may be <strong>irreversible</strong>. Please ensure you have reviewed all details before confirming.']} />
        <ModalFooter text="All changes are saved automatically.">
          
          <GroupButtons buttons={[
            { text: 'Confirm', variant: "primary", onClick: () => setModal(false) },
            { text: 'Discard', variant: "danger", onClick: () => setModal(false) },
            { text: 'Cancel', onClick: () => setModal(false) },
          ]}/>
        </ModalFooter>
      </Modal>
    </>
  )	
};
