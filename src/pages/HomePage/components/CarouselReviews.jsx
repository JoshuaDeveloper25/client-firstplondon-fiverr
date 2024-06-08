import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    reviewFeedback: `TalkTalk keep me informed in an
        entertaining and respectful way. I particularly
        like that they let me know whether I am on
        the most economical deal. Talking of which, I
        pay a lot less each month than my mates for my mobile phone.`,
    reviewName: "Terry",
    reviewCompany: "Trustpilot Reviews",
  },

  {
    reviewFeedback: `TalkTalk keep me informed in an
        entertaining and respectful way. I particularly
        like that they let me know whether I am on
        the most economical deal. Talking of which, I
        pay a lot less each month than my mates for my mobile phone.`,
    reviewName: "Nicole",
    reviewCompany: "Trustpilot Reviews",
  },

  {
    reviewFeedback: `TalkTalk keep me informed in an
        entertaining and respectful way. I particularly
        like that they let me know whether I am on
        the most economical deal. Talking of which, I
        pay a lot less each month than my mates for my mobile phone.`,
    reviewName: "David Lomas",
    reviewCompany: "Trustpilot Reviews",
  },

  {
    reviewFeedback: `TalkTalk keep me informed in an
        entertaining and respectful way. I particularly
        like that they let me know whether I am on
        the most economical deal. Talking of which, I
        pay a lot less each month than my mates for my mobile phone.`,
    reviewName: "Daniela",
    reviewCompany: "Trustpilot Reviews",
  },

  {
    reviewFeedback: `TalkTalk keep me informed in an
        entertaining and respectful way. I particularly
        like that they let me know whether I am on
        the most economical deal. Talking of which, I
        pay a lot less each month than my mates for my mobile phone.`,
    reviewName: "John",
    reviewCompany: "Trustpilot Reviews",
  },

  {
    reviewFeedback: `TalkTalk keep me informed in an
        entertaining and respectful way. I particularly
        like that they let me know whether I am on
        the most economical deal. Talking of which, I
        pay a lot less each month than my mates for my mobile phone.`,
    reviewName: "Jonas",
    reviewCompany: "Trustpilot Reviews",
  },
];

const CarouselReviews = () => {
  return (
    <div className="relative">
      <div className="swiper-button image-swiper-button-next absolute z-50 cursor-pointer top-16 min-[1000px]:-right-3 right-0">
        <IoIosArrowForward className="text-white bg-black/50 rounded-full p-1 size-6" />
      </div>

      <div className="swiper-button image-swiper-button-prev absolute z-50 cursor-pointer top-16 min-[1000px]:-left-8 md:-left-3 left-0">
        <IoIosArrowBack className="text-white bg-black/50 rounded-full p-1 size-6" />
      </div>

      <Swiper
        centeredSlides={ false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        breakpoints={{
          // when window width is >= 340px
          340: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 768px
          950: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }}
        loop={true}
      >
        {reviews?.map((review, index) => (
          <SwiperSlide key={index} className="md:px-0 px-9">
            <p className="text-sm max-w-md leading-4">
              {review?.reviewFeedback}
            </p>
            <h3 className="mt-4">{review?.reviewName}</h3>
            <h3 className="text-green-900 font-bold">
              {review?.reviewCompany}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselReviews;
