/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import Accordion from "../../../components/Accordion";
import CardContent from "../../../components/CardContent";
import { FaChevronDown } from "react-icons/fa";
import { accordionSlider } from "../../../../data";
import { Link } from "react-router-dom";

const CarouselResponsive = () => {
  const [accordionBox, setAccordionBox] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);
  const [color, setColor] = useState("");

  // const slideTo = (index) => {
  //   if (swiper) swiper.slideTo(index);
  // };

  return (
    <div className="mx-auto">
      <div className="responsive px-5">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          onSwiper={setSwiperRef}
          centeredSlides
          controller
          // breakpoints={{
          //   640: {
          //     slidesPerView: 3,
          //   },
          // }}
          // slidesPerView={2}
          slidesPerView={3}
          spaceBetween={15}
          className="pb-10 swiperModificado"
        >
          {accordionSlider.map((item, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <Card
                  color={item.color}
                  isActive={isActive}
                  setColor={setColor}
                  accordionContent={item?.accordionContent}
                  item={item}
                  setAccordionBox={setAccordionBox}
                  isDragging={isDragging}
                  index={idx}
                  swiperRef={swiperRef}
                  accordionBox={accordionBox}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Card = ({
  isActive,
  setColor,
  color,
  isDragging,
  accordionContent,
  setAccordionBox,
  swiperRef,
  index,
  accordionBox,
  item,
}) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (i) => {
    setIsOpenAccordion(isOpenAccordion === i ? null : i);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  useEffect(() => {
    if (isActive) {
      setColor(color);
      setAccordionBox(accordionContent);
    }
  }, [isActive, color]);

  const handleNextCard = () => {
    slideTo(index + 1, 0);
  };

  return (
    <div
      style={{ border: isActive ? `2px solid ${color}` : null }}
      className={`pt-10 card rounded-xl text-white 
        ${isActive ? "bg-grayDark" : null}
        ${isDragging ? "removeML" : null}`}
    >
      <div className="h-full">
        <div className={`${isActive ? "flex-1" : "card__imgBox"}`}>
          <img
            src={item?.banner}
            onClick={() => handleNextCard(index)}
            alt=""
            className={`mx-auto object-contain ${
              isActive ? "h-48" : "cursor-pointer h-44"
            }`}
          />
        </div>
        <div className="card__content mt-5" style={{ flex: 2 }}>
          <div className="px-5">
            <CardContent item={item} index={index} />
          </div>

          <div
            className="grid transition-all mt-5"
            style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="px-2">
                {accordionBox?.map((item, index) => {
                  return (
                    <Accordion
                      item={item}
                      index={index}
                      key={index}
                      colorArrow={color}
                      isOpen={isOpenAccordion === index}
                      toggle={() => onClick(index)}
                    />
                  );
                })}
              </div>

              <p className="text-center mt-5 text-base">
                Talktalk's standard{" "}
                <Link
                  className="underline font-semibold"
                  to={"#"}
                  target="_blank"
                >
                  Terms and Conditions
                </Link>{" "}
                apply.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:py-2 py-5 mt-5 bg-white text-black w-full flex justify-center items-center gap-2 rounded-b-xl"
          >
            View plan details
            <FaChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : null}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselResponsive;
