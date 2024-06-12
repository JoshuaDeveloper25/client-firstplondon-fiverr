import { Link } from "react-router-dom";

import apn from "../../../assets/apn.png";
import pin from "../../../assets/pin.png";
import puk from "../../../assets/puk.png";
import voicmail from "../../../assets/voicmail.png";
import topup from "../../../assets/topup.webp";
import sim from "../../../assets/sim.png";

const GettingStarted = () => {
  return (
    <section className="max-w-[1100px] mx-auto md:px-0 px-2 mt-16 ">
      <div className="text-center">
        <Link to={"#"} className="section-button">
          User guides
        </Link>
      </div>

      <div>
        <h2 className="text-[#674EA7] text-5xl text-center font-bold mt-6">
          Getting started on Talktalk
        </h2>
        <p className="text-[#7F67B4] max-w-4xl mx-auto text-xl text-center my-4">
          Ready to get started? you might have some questions. Learn how it all
          works with these guides!
        </p>
      </div>

      {/* Desktop */}
      <div className="md:grid items-start hidden sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12 px-3">
        <Link to={"#"}>
          <article className="relative gap-5 bg-[#B6D7A8] p-3 rounded-lg">
            <div className="pb-0">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
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

            <div className="self-end">
              <img
                className="absolute lg:mx-0 mx-auto right-0 bottom-0 w-20"
                src={sim}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="relative bg-[#C9DAF8] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
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

            <div className="self-end">
              <img
                className="absolute lg:mx-0 mx-auto w-32 right-0 bottom-0"
                src={pin}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="relative bg-[#FCE5CD] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
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
                className="absolute lg:mx-0 mx-auto w-20 right-0 bottom-0"
                src={topup}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="relative bg-[#F9CB9C] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
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

            <div className="self-end">
              <img
                className="absolute lg:mx-0 mx-auto w-32 right-0 bottom-0"
                src={voicmail}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="relative bg-[#CEC8E6] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
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

            <div className="self-end">
              <img
                className="absolute lg:mx-0 mx-auto w-20 right-0 bottom-0"
                src={puk}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="relative bg-[#EAD1DC] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
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
                className="absolute lg:mx-0 mx-auto w-28 right-0 bottom-0"
                src={apn}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>
      </div>

      {/* Responsive */}
      <div className="md:hidden grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12 px-3">
        <Link to={"#"}>
          <article className="max-w-sm mx-auto flex justify-between relative gap-5 bg-[#B6D7A8] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
                Activate your Talktak SIM
              </h3>
              <p className="my-3 text-gray-700">
                Check our easy step by step guide.
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div className="self-end">
              <img className="w-20" src={sim} loading="lazy" decoding="async" />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="max-w-sm mx-auto flex justify-between relative bg-[#C9DAF8] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
                Talktalk PIN Code
              </h3>
              <p className="my-3 text-gray-700">
                What is the default PIN for your giffgaff SIM card?
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div className="self-end">
              <img
                className=" w-44"
                src={pin}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="max-w-sm mx-auto flex justify-between bg-[#FCE5CD] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
                Top Up your Talktalk SIM
              </h3>
              <p className="my-3 text-gray-700">
                Top up, buy a plan, or repurchase early, Learn how in seconds!
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div className="self-end">
              <img
                className="w-20"
                src={topup}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="max-w-sm mx-auto flex justify-between bg-[#F9CB9C] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
                Talktalk Voicemail
              </h3>
              <p className="my-3 text-gray-700">
                Beyond messages, your Voicemail lets you:
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div className="self-end">
              <img
                className="w-40"
                src={voicmail}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="max-w-sm mx-auto flex justify-between bg-[#CEC8E6] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
                PUK, unlock your Talktalk SIM
              </h3>
              <p className="my-3 text-gray-700">
                Blocked SIM? You'll need the PUK code (after 3 wrong PINs).
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div className="self-end">
              <img className="w-28" src={puk} loading="lazy" decoding="async" />
            </div>
          </article>
        </Link>

        <Link to={"#"}>
          <article className="max-w-sm mx-auto flex justify-between bg-[#EAD1DC] p-3 pb-0 rounded-lg">
            <div className="pb-3">
              <h3 className="text-[#674EA7] text-[1.12rem] font-bold">
                Talktalk APN Internet Settings
              </h3>
              <p className="my-3 text-gray-700">
                Mobile data down? An incorrect APN might be blocking the signal.
              </p>
              <button className="bg-[#FFD966] rounded p-1">
                Continue reading
              </button>
            </div>

            <div className="self-end">
              <img className="w-40" src={apn} loading="lazy" decoding="async" />
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default GettingStarted;
