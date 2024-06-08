import { Link } from "react-router-dom";
import sim from "../../../assets/sim.png";

const GettingStarted = () => {
  return (
    <section className="container-page md:px-0 px-2 mt-16 ">
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12 px-3">
        <article className="relative bg-[#B6D7A8] p-3 rounded-lg">
          <div>
            <h3 className="text-[#674EA7] text-[1.2rem] font-bold">
              Activate your Talktak SIM
            </h3>
            <p className="my-3 text-gray-700">
              Check our easy step by <span className="block">step guide.</span>
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
  );
};

export default GettingStarted;
