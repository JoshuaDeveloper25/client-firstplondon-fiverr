import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

const AccordionAlt = ({
  isOpen,
  handleToggle,
  title,
  content,
  info,
  colorArrow,
  id,
}) => {
  return (
    <div className={`mb-3 ${isOpen === id ? "bg-green-200/35" : null}`}>
      <button
        onClick={() => handleToggle(id)}
        className={`flex justify-between items-center gap-2 w-full rounded px-2 py-2 ${
          isOpen === id ? null : "border border-cyan-500"
        }`}
      >
        {" "}
        {title}
        <span style={{ color: colorArrow }}>
          {isOpen === id ? <FaMinus /> : <FaPlus />}
        </span>{" "}
      </button>

      <div
        className="grid transition-all shadow-lg"
        style={{ gridTemplateRows: isOpen === id ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div>
            <div className="px-5 py-3">
              <p className="font-thin">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionAlt;
