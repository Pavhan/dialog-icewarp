import clsx from "clsx";
import { Button, ButtonProps } from "../Button/Button";

interface GroupButtonsProps {
  buttons?: ButtonProps[];
}

export const GroupButtons = ({ buttons } : GroupButtonsProps) => {
  return buttons ? 
    <div className={clsx("flex flex-nowrap gap-2 items-start grow sm:grow-0 justify-end")}>
      {buttons.map((button, index) => <Button key={index} isExpandable={true} {...button} />)}
    </div> : null
}