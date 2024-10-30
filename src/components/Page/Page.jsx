
import { FaceSmileIcon, TrashIcon, PlusCircleIcon } from "@heroicons/react/24/solid"

import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export const Page = () => {
  return <div className="max-w-4xl mx-auto p-6">
    <h1 className="font-bold text-xl mb-4">Dialog window alternatives</h1>
    <ModalWrapper
      description="none buttons in header + none buttons in footer + no footer text"
      icon={<FaceSmileIcon />} 
      title="Congratulations!"
      content={["Your list is saved automatically.", "This window will be close in <strong>5</strong> seconds automatically."]}
      />

    <ModalWrapper
      description="2 buttons in header, none buttons in footer + footer text"
      icon={<FaceSmileIcon />} 
      title="Congratulations!"
      content={["Your list is saved automatically.", "This window will be close in 5 seconds automatically."]}
      headerButtons={[
        { text: "Help"},
      ]}
      footerText="Contact support if you have any questions."
    />

    <ModalWrapper
      description="2 buttons in header, 2 buttons in footer  + no footer text"
      icon={<PlusCircleIcon />} 
      title="Add new item"
      content={["Are you sure you want to <strong>add</strong> this item to your list?", "Please verify all details before proceeding, as this action will add a new item."]}
      headerButtons={[
        { text: "Help"},
        { text: "FAQ"},
      ]}
      footerButtons={[
        { text: "Confirm", variant: "primary" },
        { text: "Discard", variant: "danger" },
      ]} />

    <ModalWrapper
      description="3 buttons in header, 3 buttons in footer + footer text"
      icon={<TrashIcon />} 
      title="Remove item"
      content={["Are you sure you want to <strong>remove</strong> this item from your list?", "This action cannot be <strong>undone</strong>, so make sure to double-check before continuing."]}
      headerButtons={[
        { text: "Help"},
        { text: "Detail"},
        { text: "Report"},
      ]}
      footerText="All changes are saved."
      footerButtons={[
        { text: "Confirm", variant: "primary" },
        { text: "Back", variant: "danger" },
        { text: "Cancel" },
      ]} />

      <ul className="border-t border-gry-200 text-sm mt-5 pt-5 space-y-3">
        <li><strong>*</strong> Group of buttons will be wrapped to a new line and aligned to the right when doesn’t fit on the same line with text.</li>
        <li><strong>**</strong> Footer Buttons are wide as possible</li>
      </ul>
  </div>
};
