import CarouselReviews from "../components/CarouselReviews";
import wristHeart from "../../../assets/wrist-heart.webp";
import fourStars from "../../../assets/trustpilot.png";
import greenBg from "../../../assets/fondo-verde.jpg";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <section className="container-page my-16 px-2">
      <div className="text-center mb-8">
        <Link to={"#"} className="section-button">
          Reviews
        </Link>
      </div>

      <div>
        <img
          src={wristHeart}
          className="mx-auto w-52"
          decoding="async"
          loading="lazy"
        />
        <h3 className="text-center text-green-800 text-xl font-bold my-5">
          Customer satisfaction is TalkTalk's priority. That's why it is proud
          to be one of the highest rated mobile network on Trustpilot, with over
          20,476 reviews.
        </h3>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        <article className="md:col-span-2 col-span-full max-w-md mx-auto sm:w-80">
          <div>
            <h2 className="bg-black text-white rounded-t-md  text-center text-xl font-bold py-2">
              TalkTalk | Trustpilot
            </h2>
          </div>

          <div className="relative">
            <img
            className="rounded-b-md"
              decoding="async"
              loading="lazy"
              src={greenBg}
            />

            <div className="absolute top-0 flex flex-col justify-center w-full items-center h-full">
              <div className="flex text-white justify-center gap-4 items-center">
                <h3>Reviews 20.476</h3>
                <div className="bg-white rounded-full h-2 w-2"></div>
                <h3>Excelent</h3>
              </div>
              <img
                className="w-36 mt-2"
                decoding="async"
                loading="lazy"
                src={fourStars}
              />
            </div>
          </div>
        </article>

        <article className="md:col-span-3 col-span-full">
          <CarouselReviews />
        </article>
      </div>
    </section>
  );
};

export default Reviews;
