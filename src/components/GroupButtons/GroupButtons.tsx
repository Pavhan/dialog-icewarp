import { Button, ButtonProps } from "../Button/Button";

interface GroupButtonsProps {
  buttons?: ButtonProps[];
}

export const GroupButtons = ({ buttons } : GroupButtonsProps) => {
  return buttons ? 
    <div className="flex flex-wrap gap-2 items-start justify-end flex-grow">
      {buttons.map((button, index) => <Button key={index} {...button} />)}
    </div> : null
}