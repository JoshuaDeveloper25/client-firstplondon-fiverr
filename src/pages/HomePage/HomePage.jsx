// --> Components sections
import Header from "./components/Header";
import Cookies from "./components/Cookies";
import CarouselComplex from "./components/CarouselComplex";
import FAQ from "./components/FAQ";
import InternationalCalls from "./components/InternationalCalls";
import GettingStarted from "./components/GettingStarted";
import Reviews from "./components/Reviews";
import App from "./components/App";

const HomePage = () => {
  return (
    <div>
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
