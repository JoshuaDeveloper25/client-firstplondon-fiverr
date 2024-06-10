import { MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BackToTop = () => {
  return (
    <div
      className="absolute right-[50%] top-[-3rem] z-50"
      style={{ transform: "translate(50%, 50%)" }}
    >
      <NavLink to={"#navbar"}>
        <MdKeyboardArrowUp
          size={50}
          className="border border-cyan-400 text-white bg-blue-400 rounded-full"
        />{" "}
      </NavLink>
    </div>
  );
};

export default BackToTop;
