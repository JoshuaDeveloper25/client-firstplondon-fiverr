import talkTalkTrustpilot from "../../../assets/talktalk-trustpilot.png";
import CarouselReviews from "../components/CarouselReviews";
import wristHeart from "../../../assets/wrist-heart.png";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <section className="container-page mt-16 px-2">
      <div className="text-center mb-8">
        <Link to={"#"} className="section-button">
          Reviews
        </Link>
      </div>

      <div>
        <img
          src={wristHeart}
          className="mx-auto"
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
        <article className="md:col-span-2 col-span-full max-w-md md:mx-0 mx-auto">
          <img
            decoding="async"
            loading="lazy"
            className=""
            src={talkTalkTrustpilot}
            alt={"Imagen del Header"}
          />
        </article>

        <article className="md:col-span-3 col-span-full">
          <CarouselReviews />
        </article>
      </div>
    </section>
  );
};

export default Reviews;
