import gif1 from "../../../assets/activate-sim.png";
import gif2 from "../../../assets/get-sim-home.svg";
import brownCard from "../../../assets/brown-card.png";
import { useEffect } from "react";
import { useRef } from "react";

const Header = () => {
  const flexibilityRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0, // La animación se activará cuando al menos el 50% de la sección sea visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si la sección es visible en el viewport, añadir la clase de animación
          flexibilityRef.current.classList.add("animation-active");
        } else {
          // Si la sección ya no es visible, remover la clase de animación
          flexibilityRef.current.classList.remove("animation-active");
        }
      });
    }, options);

    observer.observe(flexibilityRef.current);

    // Cleanup al desmontar el componente
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="flexibility"
      className="overflow-visible container-page md:px-0 px-2 md:mt-14 mt-5"
      ref={flexibilityRef}
    >
      <div className="flex justify-center items-center mx-3 gap-4">
        <div className="flex-1 animation-from-right">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>

        <div className="flex-1 animation-from-right">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>

        <div className="flex-1 animation-from-right">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>

        <div className="flex-1 animation-from-right">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>

        <div className="flex-1 animation-from-left">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>

        <div className="flex-1 animation-from-left">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>

        <div className="flex-1 animation-from-left">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>

        <div className="flex-1 animation-from-left">
          <img src={brownCard} loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-gray-900 text-3xl font-bold mb-3 mt-8">
          Enjoy the <span className="text-[#FF00FF]">flexibility</span> of
          TalkTalk´s SIM deals
        </h1>
        <p className="max-w-xl text-gray-900 mx-auto">
          Choose from our great value deals, each packed with{" "}
          <span className="text-[#FF00FF] font-bold">
            data, unlimited minutes and texts
          </span>
          , and <span className="text-[#FF00FF] font-bold">5GB of roaming</span>{" "}
          allowance in Europe. Switch or leave any time you want.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-40 gap-4 justify-evenly mt-12 md:px-0 px-6">
        <div>
          <h3 className="italic text-gray-800">New to Talktalk?</h3>

          <div className="relative">
            <h4 className="text-gray-800 bg-yellow-200  p-2 rounded">
              Order your free SIM
            </h4>
            <img
              className="absolute -top-4 -right-8 w-16"
              src={gif2}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div>
          <h3 className="italic text-gray-800">Already have a SIM?</h3>
          <div>
            <div className="relative">
              <h4 className="text-gray-800 bg-green-200  p-2 rounded">
                Activate your SIM
              </h4>
              <img
                className="absolute -top-3 -right-5 w-6"
                src={gif1}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
