import CarouselResponsive from "./components/CarouselResponsive";
import AccordionAlt from "../../components/AccordionAlt";
import Carousel from "./components/Carousel";

import { FaCheck } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import internationalCall from "../../assets/international-calls.png";
import talkTalkTrustpilot from "../../assets/talktalk-trustpilot.png";
import wristHeart from "../../assets/wrist-heart.png";
import gif1 from "../../assets/get-sim-home.svg";
import qrCode from "../../assets/qr-code.png";
import cellImage from "../../assets/app.png";
import cookie from "../../assets/cookie.png";
import faq from "../../assets/faq.png";
import sim from "../../assets/sim.png";
import CarouselReviews from "./components/CarouselReviews";

const HomePage = () => {
  return (
    <div>
      {/* -- Flexibility Section START -- */}
      <section className="container-page md:px-0 px-2">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="min-w-[4rem] animation-from-right">
            <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
          </div>

          <div className="min-w-[4rem] animation-from-right">
            <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
          </div>

          <div className="min-w-[4rem] animation-from-right">
            <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
          </div>

          <div className="min-w-[4rem] animation-from-right">
            <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
          </div>

          <div className="min-w-[4rem] animation-from-left">
            <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
          </div>

          <div className="min-w-[4rem] animation-from-left">
            <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
          </div>

          <div className="min-w-[4rem] animation-from-left">
            <div className="h-[10rem] w-[7rem] bg-amber-950"></div>
          </div>

          <div className="min-w-[4rem] animation-from-left">
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
      {/* -- Flexibility Section END -- */}

      {/* -- Cookies START-- */}
      <section className="container-page mt-16">
        <div className="border-yellow-600 border-2 bg-white max-w-[20rem] mx-auto rounded-2xl px-5 py-5">
          <div className="md:block hidden">
            <img className="w-24 mx-auto mb-4" src={cookie} />
            <h3 className="font-bold">We value your Privacy</h3>
          </div>

          <div className="md:hidden flex items-center">
            <img className="w-16 mx-auto" src={cookie} />
            <h3 className="font-bold">We value your Privacy</h3>
          </div>

          <p className="my-4">
            We use cookies to enhance your browsing experience and analyze our
            traffic.{" "}
          </p>

          <p className="text-center">
            By clicking "Accept", you consent to our use of cookies
          </p>

          <div className="flex justify-center gap-3 mt-4">
            <button className="text-gray-800 bg-blue-300 px-2 py-1 rounded">
              Accept All
            </button>
            <button className="text-gray-800 bg-red-300 px-2 py-1 rounded">
              Reject All
            </button>
          </div>
        </div>
      </section>
      {/* -- Cookies END -- */}

      {/* -- Carousel Section START -- */}
      <section className="my-16">
        <div className="container-page md:px-0 px-2 text-center mb-10">
          <button className="border-2 border-green-500 text-green-800 font-bold bg-white rounded-full px-4">
            SIM only deals
          </button>{" "}
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
      {/* -- Carousel Section END -- */}

      {/* -- FAQ Section START */}
      <section className="container-page md:px-0 px-2">
        <div className="text-center">
          <button className="border-2 border-green-500 text-green-800 font-bold bg-white rounded-full px-4">
            FAQ
          </button>
        </div>

        <div className="flex flex-col gap-5 md:flex-row mt-8">
          <div className="flex-1">
            <img src={faq} loading="lazy" decoding="async" />
          </div>

          <div className="self-end flex-1">
            <h3 className="font-bold text-3xl text-purple-900">
              For quick answers to your Talktalk questions, please consult our
              FAQs for solutions to common enquiries.
            </h3>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          <div className="flex-1">
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
          </div>

          <div className="flex-1">
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
          </div>
        </div>
      </section>
      {/* -- FAQ Section END */}

      {/* -- International Calls START-- */}
      <section className="container-page md:px-0 px-2 mt-16">
        <div className="text-center">
          <button className="border-2 border-green-500 text-green-800 font-bold bg-white rounded-full px-4">
            International Calls
          </button>
        </div>

        <div>
          <img
            className="my-5 mx-auto"
            src={internationalCall}
            decoding="async"
            loading="lazy"
          />

          <h2 className="text-3xl text-center font-bold">
            Calling from the UK
          </h2>
          <p className="max-w-5xl mx-auto text-center my-4">
            Staying in touch with your friends and family should be super easy,
            no matter where they are in the world. That’s why we offer great
            value international rates to our members when calling from the UK.
          </p>

          <div className="flex justify-center">
            <input
              className="px-2 py-2"
              type="text"
              placeholder="Where are you calling?"
            />
            <select className="bg-black text-white"></select>
          </div>
        </div>
      </section>
      {/* -- International Calls END -- */}

      {/* -- International Calls START-- */}
      <section className="container-page md:px-0 px-2 mt-16">
        <div className="text-center">
          <button className="border-2 border-green-500 text-green-800 font-bold bg-white rounded-full px-4">
            User guides
          </button>
        </div>

        <div>
          <h2 className="text-[#674EA7] text-5xl text-center font-bold mt-6">
            Getting started on Talktalk
          </h2>
          <p className="text-[#7F67B4] max-w-4xl mx-auto text-xl text-center my-4">
            Ready to get started? you might have some questions. Learn how it
            all works with these guides!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12 px-3">
          <article className="relative bg-[#B6D7A8] p-3 rounded-lg">
            <div>
              <h3 className="text-[#674EA7] text-[1.2rem] font-bold">
                Activate your Talktak SIM
              </h3>
              <p className="my-3 text-gray-700">
                Check our easy step by{" "}
                <span className="block">step guide.</span>
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div>
              <img
                className="absolute w-20 right-0 bottom-0"
                src={sim}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="relative bg-[#C9DAF8] p-3 rounded-lg">
            <div>
              <h3 className="text-[#674EA7] text-[1.2rem] font-bold">
                Talktalk PIN Code
              </h3>
              <p className="my-3 text-gray-700">
                What is the default PIN for{" "}
                <span className="block">your giffgaff SIM card?</span>
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div>
              <img
                className="absolute w-20 right-0 bottom-0"
                src={sim}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="relative bg-[#FCE5CD] p-3 rounded-lg">
            <div>
              <h3 className="text-[#674EA7] text-[1.2rem] font-bold">
                Top Up your Talktalk SIM
              </h3>
              <p className="my-3 text-gray-700">
                Top up, buy a plan, or{" "}
                <span className="block">repurchase early, Learn</span> how in
                seconds!
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div>
              <img
                className="absolute w-20 right-0 bottom-0"
                src={sim}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="relative bg-[#F9CB9C] p-3 rounded-lg">
            <div>
              <h3 className="text-[#674EA7] text-[1.2rem] font-bold">
                Talktalk Voicemail
              </h3>
              <p className="my-3 text-gray-700">
                Beyond messages, your
                <span className="block">Voicemail lets you:</span>
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div>
              <img
                className="absolute w-20 right-0 bottom-0"
                src={sim}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="relative bg-[#CEC8E6] p-3 rounded-lg">
            <div>
              <h3 className="text-[#674EA7] text-[1.2rem] font-bold">
                PUK, unlock your Talktalk SIM
              </h3>
              <p className="my-3 text-gray-700">
                Blocked SIM? You'll need the
                <span className="block">PUK code (after 3 wrong PINs).</span>
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div>
              <img
                className="absolute w-20 right-0 bottom-0"
                src={sim}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="relative bg-[#EAD1DC] p-3 rounded-lg">
            <div>
              <h3 className="text-[#674EA7] text-[1.2rem] font-bold">
                Talktalk APN Internet Settings
              </h3>
              <p className="my-3 text-gray-700">
                Mobile data down? An incorrect
                <span className="block">APN might be blocking the</span> signal.
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div>
              <img
                className="absolute w-20 right-0 bottom-0"
                src={sim}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </div>
      </section>
      {/* -- International Calls END -- */}

      {/* -- App START-- */}
      <section className="container-page mt-16 px-2">
        <div className="text-center mb-8">
          <button className="border-2 border-green-500 text-green-800 font-bold bg-white rounded-full px-4">
            App
          </button>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between md:items-start items-center gap-3">
          <article className="text-secondary-color md:py-8 py-2">
            <h2 className="max-w-md text-3xl font-bold">
              Get the Talktalk app
            </h2>

            <p className="max-w-xl leading-6 my-3">
              Download Talktalk app for Apple, Android and Huawei to manage your
              account with the tap of your phone. The quickest, easiest way to
              manage your giffgaff account on the go.
            </p>

            <div className="my-5 space-y-3">
              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">
                    Check how much data you have left.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">Buy or recur a plan.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">
                    Keep an eye on when your plan expires.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">
                    Add credit or turn on auto top up.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">
                    Pay with a saved card or PayPal.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">Redeem a voucher.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">Access the community.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">
                    Add multiple giffgaff accounts.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white rounded-full">
                  <FaCheck className="size-5 p-1" />
                </div>

                <div>
                  <p className="text-secondary-color">
                    Access thousands of WiFi hotspots across the UK with WiFi
                    Extra.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl">
              Scan the QR Code or Tap to download the App
            </h3>
            <div className="flex justify-center gap-5 items-center">
              <div>
                <img decoding="async" loading="lazy" src={qrCode} />
              </div>
              <div className="flex flex-col gap-2">
                <button className="leading-[1] hover:opacity-55 animation-fade flex items-center gap-3 bg-[#E8E8E8] md:px-6 px-2 py-2 rounded-md">
                  <div>
                    <FaGooglePlay className="text-black text-xl" />
                  </div>
                  <div>
                    <p className="text-start text-xs">GET IT ON</p>{" "}
                    <p className="text-black font-bold">Google Play</p>
                  </div>
                </button>

                <button className="leading-[1] hover:opacity-55 animation-fade flex items-center gap-3 bg-[#E8E8E8] md:px-6 px-2 py-2 rounded-md">
                  <div>
                    <FaApple className="text-black text-2xl" />
                  </div>
                  <div>
                    <p className="text-start text-xs">Download on the</p>{" "}
                    <p className="text-black font-bold text-start">App Store</p>
                  </div>
                </button>
              </div>
            </div>
          </article>

          <article className="max-w-md mx-auto">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={cellImage}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </section>
      {/* -- App END-- */}

      {/* -- Reviews START-- */}
      <section className="container-page mt-16 px-2">
        <div className="text-center mb-8">
          <button className="border-2 border-green-500 text-green-800 font-bold bg-white rounded-full px-4">
            Reviews
          </button>
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
            to be one of the highest rated mobile network on Trustpilot, with
            over 20,476 reviews.
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
      {/* -- Reviews END-- */}
    </div>
  );
};

export default HomePage;
