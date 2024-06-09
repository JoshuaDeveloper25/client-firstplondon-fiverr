import gif1 from "../../../assets/get-sim-home.svg";
import React, { useEffect, useRef } from 'react';

const Header = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(callback, options);

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach(el => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section id="flexibility" className="container-page md:px-0 px-2">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="min-w-[4rem] animation-from-right" ref={el => elementsRef.current[0] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>

        <div className="min-w-[4rem] animation-from-right" ref={el => elementsRef.current[1] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>

        <div className="min-w-[4rem] animation-from-right" ref={el => elementsRef.current[2] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>

        <div className="min-w-[4rem] animation-from-right" ref={el => elementsRef.current[3] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>

        <div className="min-w-[4rem] animation-from-left" ref={el => elementsRef.current[4] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>

        <div className="min-w-[4rem] animation-from-left" ref={el => elementsRef.current[5] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>

        <div className="min-w-[4rem] animation-from-left" ref={el => elementsRef.current[6] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>

        <div className="min-w-[4rem] animation-from-left" ref={el => elementsRef.current[7] = el}>
          <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3 mt-8">
          Enjoy the flexibility of TalkTalk´s SIM deals
        </h1>
        <p className="max-w-xl mx-auto">
          Choose from our great value deals, each packed with data, unlimited
          minutes and texts, and 5GB of roaming allowance in Europe. Switch or
          leave any time you want.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-40 gap-4 justify-evenly mt-12 md:px-0 px-6">
        <div>
          <h3 className="italic text-gray-800">New to Talktalk?</h3>
          <div className="relative">
            <h4 className="text-gray-800 bg-yellow-200 p-2 rounded">
              Order your free SIM
            </h4>
            <img
              className="absolute -top-4 -right-8 w-16"
              src={gif1}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div>
          <h3 className="italic text-gray-800">Already have a SIM?</h3>
          <div>
            <div className="relative">
              <h4 className="text-gray-800 bg-green-200 p-2 rounded">
                Already have a SIM?
              </h4>
              <img
                className="absolute -top-4 -right-8 w-16"
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
