import backToTop from "../assets/backtothetopbutton.png";

import { MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BackToTop = () => {
  return (
    <div
      className="absolute right-[50%] top-[-3rem] z-50"
      style={{ transform: "translate(50%, 50%)" }}
    >
      <NavLink to={"#mainHeader"}>
        <img className="w-14" src={backToTop} loading="lazy" decoding="async" />
      </NavLink>
    </div>
  );
};

export default BackToTop;
