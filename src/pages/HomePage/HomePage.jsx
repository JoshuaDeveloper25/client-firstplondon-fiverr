import { MdKeyboardArrowUp } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

// --> Components sections
import Header from "./components/Header";
import Cookies from "./components/Cookies";
import CarouselComplex from "./components/CarouselComplex";
import FAQ from "./components/FAQ";
import InternationalCalls from "./components/InternationalCalls";
import GettingStarted from "./components/GettingStarted";
import App from "./components/App";
import Reviews from "./components/Reviews";

const HomePage = () => {
  return (
    <div>
      <div
        className="fixed right-[50%] bottom-[5%] z-50"
        style={{ transform: "translate(50%, 50%)" }}
      >
        <NavLink to={"/#navbar"}>
          <MdKeyboardArrowUp
            size={50}
            className="border border-cyan-400 text-white bg-blue-400 rounded-full"
          />{" "}
        </NavLink>
      </div>

      {/* -- Flexibility -- */}
      <Header />

      {/* -- Cookies -- */}
      <Cookies />

      {/* -- Carousel -- */}
      <CarouselComplex />

      {/* -- FAQ -- */}
      <FAQ />

      {/* -- International Calls -- */}
      <InternationalCalls />

      {/* -- Getting Started on Talktalk -- */}
      <GettingStarted />

      {/* -- App START -- */}
      <App />

      {/* -- Reviews START -- */}
      <Reviews />
    </div>
  );
};

export default HomePage;
