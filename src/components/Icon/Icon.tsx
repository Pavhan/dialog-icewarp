interface IconProps {
  element: JSX.Element;
}

export const Icon = ({ element }: IconProps) => {
  return (
    <span className="min-w-5 size-5 inline-block text-violet-600">
      {element}
    </span>
  );
}