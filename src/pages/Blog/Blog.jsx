import blogImage from "../../assets/blog-image.png";
import { NavLink } from "react-router-dom";
import sim from "../../assets/sim.png";

const Blog = () => {
  return (
    <>
      {/* -- App START -- */}
      <section className="container-page mt-16 px-2">
        <div className="flex flex-col-reverse sm:flex-row gap-8">
          <article className="flex-1 text-secondary-color">
            <h3 className="text-zinc-800 font-bold text-center text-3xl">
              What is the default PIN Code for my Talktalk SIM?
            </h3>
            <div className="bg-gray-700 my-5 w-full block h-1 rounded"></div>
            <h4>Article written on April 4, 2024</h4>
          </article>

          <article className="flex-1 mx-auto">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={blogImage}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </section>
      {/* -- App END -- */}

      {/* -- In this article START -- */}
      <section className=" container-page sm:mt-16 mt-4 px-2">
        <div className="relative flex flex-col sm:flex-row gap-8">
          <article className="flex-1 text-secondary-color">
            <div className="bg-white rounded-md p-3">
              <h3 className="font-bold uppercase mb-5">In this article</h3>

              <NavLink
                className={"block mb-5 text-gray-600"}
                to={`/blog/#section1`}
              >
                Section 1
              </NavLink>
              <NavLink
                className={"block mb-5 text-gray-600"}
                to={`/blog/#section2`}
              >
                Section 2
              </NavLink>
              <NavLink
                className={"block mb-5 text-gray-600"}
                to={`/blog/#section3`}
              >
                Section 3
              </NavLink>
              <NavLink
                className={"block mb-5 text-gray-600"}
                to={`/blog/#section4`}
              >
                Section 4
              </NavLink>
              <NavLink
                className={"block mb-5 text-gray-600"}
                to={`/blog/#section5`}
              >
                Section 5
              </NavLink>
              <NavLink
                className={"block mb-5 text-gray-600"}
                to={`/blog/#section6`}
              >
                Section 6
              </NavLink>
              <NavLink
                className={"block mb-5 text-gray-600"}
                to={`/blog/#section7`}
              >
                Section 7
              </NavLink>
            </div>

            <div className="md:block hidden">
              <h3 className="font-bold uppercase mt-4 mb-2">Handy Guides</h3>

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

              <article className="relative bg-[#B6D7A8] p-3 rounded-lg my-3">
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
            </div>
          </article>

          <article className="flex-[50%] mx-auto">
            <div id="section1" className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                What is a PIN Code?
              </h3>
              <p className="text-gray-900">
                The PIN (Personal Identification Number) code is a password,
                which must be enabled to prevent any other person without your
                authorization from accessing your mobile phone.
              </p>
              <p className="text-gray-900 my-5">
                The PIN is a numerical code that you have to enter every time
                you want to start your device (unless you have disabled the PIN
                security feature).
              </p>
              <p className="text-gray-900">
                The PIN is associated with the SIM card (not the phone) and must
                be entered each time the phone is switched on. If a wrong PIN
                code is entered three times in a row, your mobile phone will be
                locked. To unlock it you will have to dial the PUK code.
              </p>
            </div>

            <div id="section2" className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                What is a PIN Code?
              </h3>
              <p className="text-gray-900">
                The PIN (Personal Identification Number) code is a password,
                which must be enabled to prevent any other person without your
                authorization from accessing your mobile phone.
              </p>
              <p className="text-gray-900 my-5">
                The PIN is a numerical code that you have to enter every time
                you want to start your device (unless you have disabled the PIN
                security feature).
              </p>
              <p className="text-gray-900">
                The PIN is associated with the SIM card (not the phone) and must
                be entered each time the phone is switched on. If a wrong PIN
                code is entered three times in a row, your mobile phone will be
                locked. To unlock it you will have to dial the PUK code.
              </p>
            </div>

            <div id="section3" className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                What is a PIN Code?
              </h3>
              <p className="text-gray-900">
                The PIN (Personal Identification Number) code is a password,
                which must be enabled to prevent any other person without your
                authorization from accessing your mobile phone.
              </p>
              <p className="text-gray-900 my-5">
                The PIN is a numerical code that you have to enter every time
                you want to start your device (unless you have disabled the PIN
                security feature).
              </p>
              <p className="text-gray-900">
                The PIN is associated with the SIM card (not the phone) and must
                be entered each time the phone is switched on. If a wrong PIN
                code is entered three times in a row, your mobile phone will be
                locked. To unlock it you will have to dial the PUK code.
              </p>
            </div>

            <div id="section4" className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                What is a PIN Code?
              </h3>
              <p className="text-gray-900">
                The PIN (Personal Identification Number) code is a password,
                which must be enabled to prevent any other person without your
                authorization from accessing your mobile phone.
              </p>
              <p className="text-gray-900 my-5">
                The PIN is a numerical code that you have to enter every time
                you want to start your device (unless you have disabled the PIN
                security feature).
              </p>
              <p className="text-gray-900">
                The PIN is associated with the SIM card (not the phone) and must
                be entered each time the phone is switched on. If a wrong PIN
                code is entered three times in a row, your mobile phone will be
                locked. To unlock it you will have to dial the PUK code.
              </p>
            </div>

            <div id="section5" className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                What is a PIN Code?
              </h3>
              <p className="text-gray-900">
                The PIN (Personal Identification Number) code is a password,
                which must be enabled to prevent any other person without your
                authorization from accessing your mobile phone.
              </p>
              <p className="text-gray-900 my-5">
                The PIN is a numerical code that you have to enter every time
                you want to start your device (unless you have disabled the PIN
                security feature).
              </p>
              <p className="text-gray-900">
                The PIN is associated with the SIM card (not the phone) and must
                be entered each time the phone is switched on. If a wrong PIN
                code is entered three times in a row, your mobile phone will be
                locked. To unlock it you will have to dial the PUK code.
              </p>
            </div>

            <div id="section6" className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                What is a PIN Code?
              </h3>
              <p className="text-gray-900">
                The PIN (Personal Identification Number) code is a password,
                which must be enabled to prevent any other person without your
                authorization from accessing your mobile phone.
              </p>
              <p className="text-gray-900 my-5">
                The PIN is a numerical code that you have to enter every time
                you want to start your device (unless you have disabled the PIN
                security feature).
              </p>
              <p className="text-gray-900">
                The PIN is associated with the SIM card (not the phone) and must
                be entered each time the phone is switched on. If a wrong PIN
                code is entered three times in a row, your mobile phone will be
                locked. To unlock it you will have to dial the PUK code.
              </p>
            </div>

            <div id="section7" className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                What is a PIN Code?
              </h3>
              <p className="text-gray-900">
                The PIN (Personal Identification Number) code is a password,
                which must be enabled to prevent any other person without your
                authorization from accessing your mobile phone.
              </p>
              <p className="text-gray-900 my-5">
                The PIN is a numerical code that you have to enter every time
                you want to start your device (unless you have disabled the PIN
                security feature).
              </p>
              <p className="text-gray-900">
                The PIN is associated with the SIM card (not the phone) and must
                be entered each time the phone is switched on. If a wrong PIN
                code is entered three times in a row, your mobile phone will be
                locked. To unlock it you will have to dial the PUK code.
              </p>
            </div>
          </article>
        </div>
      </section>
      {/* -- In this article END -- */}
    </>
  );
};

export default Blog;
