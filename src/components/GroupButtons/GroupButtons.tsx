import clsx from "clsx";
import { Button, ButtonProps } from "../Button/Button";

interface GroupButtonsProps {
  expadableButtonWidth?: boolean;
  buttons?: ButtonProps[];
}

export const GroupButtons = ({ expadableButtonWidth, buttons } : GroupButtonsProps) => {
  return buttons ? 
    <div className={clsx("flex flex-nowrap gap-2 items-start sm:justify-end", {"flex-grow": expadableButtonWidth})}>
      {buttons.map((button, index) => <Button key={index} expandableWidth={expadableButtonWidth} {...button} />)}
    </div> : null
}