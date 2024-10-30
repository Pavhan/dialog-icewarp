import { Button, ButtonProps } from "../Button/Button";

interface GroupButtonsProps {
  expadableButtonWidth?: boolean;
  buttons?: ButtonProps[];
}

export const GroupButtons = ({ expadableButtonWidth, buttons } : GroupButtonsProps) => {
  return buttons ? 
    <div className="flex flex-nowrap gap-2 items-start sm:justify-end flex-grow">
      {buttons.map((button, index) => <Button key={index} expandableWidth={expadableButtonWidth} {...button} />)}
    </div> : null
}