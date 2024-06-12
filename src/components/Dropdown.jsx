import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const Dropdown = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={divRef} className={`relative z-20 ${info?.responsive}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[14px] font-bold montserrat hover:text-[#d22d8a] transition-all duration-300"
      >
        <span className="lg:hidden">
          {<img className="inline w-8 me-2" src={info?.icon} />}
        </span>{" "}
        {info?.title}{" "}
        {info?.links ? <IoIosArrowDown className="inline" /> : null}
      </button>

      {isOpen && !!info?.links?.length && (
        <div className="flex flex-col lg:flex-row lg:absolute right-0 top-full lg:gap-8 p-5 lg:w-[30rem] bg-white">
          <ul className="flex-1">
            {info?.links?.map((item, index) => {
              return (
                <li key={index} className="mb-2">
                  <Link
                    to={item?.link}
                    className="text-sm font-semibold hover:text-[#d22d8a] transition-all duration-200 ease-in-out"
                  >
                    {item?.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {!!info?.image && (
            <div className="flex-1 max-w-[15rem]">
              <img src={info?.image} className="rounded-2xl h-full w-full" />
            </div>
          )}
        </div>
      )}
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
