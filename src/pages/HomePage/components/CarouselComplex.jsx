import CarouselResponsive from "../components/CarouselResponsive";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom"

const CarouselComplex = () => {
  return (
    <section className="my-16">
        <div className="container-page md:px-0 px-2 text-center mb-10">
          <Link to={"#"} className="section-button">
            SIM only deals
          </Link>{" "}
          <h2 className="text-gray-800 text-3xl font-bold mb-3 mt-8">
            Talktalk Monthly SIM Only Deals
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto">
            Whether you want <span className="font-bold">Pay As You Go</span>, a{" "}
            <span className="font-bold">monthly plan</span>, or a{" "}
            <span className="font-bold">flexible contract</span>, we offer the
            best SIM-only deals for everyone, powered by{" "}
            <span className="font-bold">O2</span>. Enjoy{" "}
            <span className="font-bold">5G</span> with a{" "}
            <span className="font-bold">5G</span> phone. Use up to 5 GB of your
            allowance in the <span className="font-bold">EU</span> at no extra
            cost.
          </p>
          <p className="text-gray-800">
            £20 per month gets you 30-40GB of{" "}
            <span className="block">data, depending on your plan.</span>
          </p>
        </div>

        <div className="md:hidden">
          <CarouselResponsive />
        </div>

        <div className="hidden md:block">
          <Carousel />
        </div>
      </section>
  )
}

export default CarouselComplex