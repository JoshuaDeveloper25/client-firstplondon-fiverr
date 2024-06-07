import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

const AccordionAlt = ({ title = "titulo", info, colorArrow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center gap-2 w-full border border-cyan-500 rounded px-2 py-2"
      >
        {" "}
        {title}
        <span style={{ color: colorArrow }}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>{" "}
      </button>

      <div
        className="grid transition-all bg-green-200/35"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div>
            <div className="px-5 py-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionAlt;
