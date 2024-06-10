import fiveStarsYellow from "../assets/review.gif";
import oneStar from "../assets/oneStar.png";
import login from "../assets/login.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <section id="mainHeader" className="container-page px-2 pt-3">
      <div className="flex flex-col md:flex-row justify-evenly md:gap-8 gap-2 items-center">
        <div className="flex-[80%] flex sm:text-start text-center flex-col sm:flex-row justify-center items-center text-gray-700 gap-2">
          <img
            className="w-24"
            src={fiveStarsYellow}
            loading="lazy"
            decoding="async"
          />
          <h3>4,1 - Best</h3>
          <img src={oneStar} className="w-6" loading="lazy" decoding="async" />
          <h3>Trustpilot score - 29.809 reviews</h3>
        </div>

        <div className="flex-1">
          <Link>
            <img
              className="w-8 inline me-3"
              src={login}
              loading="lazy"
              decoding="async"
            />
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
