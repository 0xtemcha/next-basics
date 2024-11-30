import { LucideMessageSquareWarning } from "lucide-react";
import React, { cloneElement } from "react";

const Empty = ({
  message,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: {
  message: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
}) => {
  return (
    <div
      className={
        "flex-1 self-center flex flex-col items-center justify-center gap-y-2"
      }
    >
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <div className={"text-lg text-center"}>{message}</div>
      {cloneElement(button, { className: "h-10" })}
    </div>
  );
};

export default Empty;
