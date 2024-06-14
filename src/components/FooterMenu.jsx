import activateSim from "../assets/activatesim.png";
import getSimHome from "../assets/get-sim-home.svg";
import { Link } from "react-router-dom";
import login from "../assets/login.png";

const FooterMenu = () => {
  return (
    <ul className="lg:hidden text-center space-y-3 py-4 bg-gray-200">
      <li>
        <Link to="#">
          <img
            src={getSimHome}
            className="inline w-10"
            loading="lazy"
            decoding="async"
          />{" "}
          Order your free SIM
        </Link>
      </li>
      <li>
        <Link to="#">
          <img
            src={activateSim}
            className="inline w-10"
            loading="lazy"
            decoding="async"
          />{" "}
          Activate your SIM
        </Link>
      </li>
      <div className="h-[.1rem] w-full bg-gray-300"></div>
      <li>
        <Link to="#" className="block text-center w-full">
          <img
            src={login}
            className="inline w-8 mx-auto"
            loading="lazy"
            decoding="async"
          />{" "}
          <span className="ps-2 ">Log In</span>
        </Link>
      </li>
    </ul>
  );
};

export default FooterMenu;
