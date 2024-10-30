
import { FaceSmileIcon, TrashIcon, PlusCircleIcon } from "@heroicons/react/24/solid"

import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export const Page = () => {
  return <div className="max-w-4xl mx-auto p-6">
    <h1 className="font-bold text-xl mb-4">Dialog window alternatives</h1>
    <ModalWrapper
      description="no buttons in header + no buttons in footer + no footer text"
      icon={<FaceSmileIcon />} 
      title="Congratulations!"
      content={["Your list is saved automatically."]}
      showCloseButton={true}
      />

    <ModalWrapper
      description="1 button in header, 1 button in footer + footer text"
      icon={<FaceSmileIcon />} 
      title="Congratulations!"
      content={["Your list is saved automatically."]}
      headerButtons={[
        { text: "Help"},
      ]}
      footerText="Contact support if you have any questions."
      footerButtons={[
        { text: "Close", variant: "danger" },
      ]}
    />

    <ModalWrapper
      description="3 buttons in header, 2 buttons in footer  + no footer text"
      icon={<PlusCircleIcon />} 
      title="Add new item to the list"
      content={["Are you sure you want to <strong>add</strong> this item to your list?", "Please verify all details before proceeding, as this action will add a new item."]}
      headerButtons={[
        { text: "Help"},
        { text: "FAQ"},
        { text: "Detail"},
      ]}
      footerButtons={[
        { text: "Confirm", variant: "primary" },
        { text: "Discard", variant: "danger" },
      ]} />

    <ModalWrapper
      description="2 buttons in header, 3 buttons in footer + footer text"
      icon={<TrashIcon />} 
      title="Remove item"
      content={["Are you sure you want to <strong>remove</strong> this item from your list?", "This action cannot be <strong>undone</strong>, so make sure to double-check before continuing."]}
      headerButtons={[
        { text: "Help"},
        { text: "Report"},
      ]}
      footerText="All changes are saved automatically."
      footerButtons={[
        { text: "Confirm", variant: "primary" },
        { text: "More info", },
        { text: "Cancel", variant: "danger" },
      ]} />

      <ul className="border-t border-gray-300 text-gray-500 text-sm mt-8 pt-8 space-y-3">
        <li><strong>*</strong> Group of buttons will be wrapped to a new line and aligned to the right when doesn’t fit on the same line with text.</li>
      </ul>
  </div>
};
