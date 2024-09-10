// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import img from "../../../assets/gif2-transparente.gif";
import { GrNext } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Accordion from "../../../components/Accordion";
import CardContent from "../../../components/CardContent";
import { accordionSlider } from "../../../../data";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [accordionBox, setAccordionBox] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);
  const [color, setColor] = useState("");

  const handleTouchMove = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="desktop max-w-3xl lg:max-w-5xl xl:max-w-5xl mx-auto relative ">
      <div className="">
        <Swiper
          // install Swiper modules
          // navigation
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          slidesPerView={"auto"}
          onSwiper={setSwiperRef}
          centeredSlides
          controller
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="px-32 swiperDesktop static"
        >
          {accordionSlider.map((item, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <Card
                  color={item.color}
                  isActive={isActive}
                  setColor={setColor}
                  accordionContent={item?.accordionContent}
                  setAccordionBox={setAccordionBox}
                  isDragging={isDragging}
                  index={idx}
                  swiperRef={swiperRef}
                />
              )}
            </SwiperSlide>
          ))}

          <Arrows />
        </Swiper>
      </div>

      <div className={`mt-10 max-w-md md:max-w-[565px] mx-auto pl-2`}>
        <div
          className="bg-grayDark text-white text-xl py-5 rounded-xl"
          style={{ border: `2px solid ${color}` }}
        >
          <header
            className="pb-2 px-4 mb-5"
            style={{ borderBottom: `2px solid ${color}` }}
          >
            This plan includes
          </header>
          <div className="grid grid-cols-2 px-4 gap-y-4">
            {accordionBox?.map((item, index) => {
              return <Accordion item={item} key={index} colorArrow={color} />;
            })}
          </div>
          <p className="text-center mt-5 text-base">
            Talktalk's standard{" "}
            <Link className="underline font-semibold" to={"#"} target="_blank">
              Terms and Conditions
            </Link>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({
  color,
  isActive,
  setColor,
  isDragging,
  accordionContent,
  setAccordionBox,
  swiperRef,
  index,
}) => {
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
      className={`py-10 card rounded-xl text-white 
      ${isActive ? "bg-grayDark" : null}
      ${isDragging ? "removeML" : null}`}
    >
      <div className="flex gap-5 h-full">
        <div className={`${isActive ? "flex-1" : "card__imgBox"}`}>
          <img
            src={img}
            onClick={() => handleNextCard(index)}
            className={`"mx-auto object-contain" ${
              isActive ? "h-56" : "cursor-pointer h-44"
            }`}
          />
        </div>
        <div className="card__content" style={{ flex: 2 }}>
          <CardContent index={index} />
        </div>
      </div>
    </div>
  );
};

const Arrows = () => {
  const swiper = useSwiper();

  return (
    <div className="text-3xl">
      <button
        onClick={() => swiper.slidePrev()}
        className="rotate-180 absolute top-1/2 left-0 z-10"
      >
        <GrNext />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute top-1/2 right-0 z-10"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Carousel;
