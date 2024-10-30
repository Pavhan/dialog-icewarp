import React from "react";

interface ModalContentProps {
  content: string[];
}

export const ModalContent = ({ content }: ModalContentProps) => {
  return (
    <div className="px-4 py-8 bg-white min-h-48">
      {content.map((text, index) =>
        <p key={index} className="[&:not(:first-child)]:mt-4" dangerouslySetInnerHTML={{__html: text}} />
      )}
    </div>
  );
}