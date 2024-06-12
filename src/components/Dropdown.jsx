import { createPortal } from "react-dom";

const Dropdown = ({ info }) => {
  return (
    <div>
      <button className="text-[14px]  font-bold montserrat">
        {info?.title}
      </button>
    </div>
  );
};

export default Dropdown;

export const CloseDropDown = ({ setFalse }) => {
  return;
  return createPortal(
    <div
      className="fixed bg-transparent w-full h-full z-[80] inset-0"
      onClick={() => setFalse(false)}
    ></div>,
    document.body
  );
};
