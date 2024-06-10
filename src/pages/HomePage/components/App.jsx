import { FaCheck } from "react-icons/fa6";

import qrCode from "../../../assets/qr-code.png";
import cellImage from "../../../assets/app.gif";
import { Link } from "react-router-dom";

import googlePlay from "../../../assets/google-play-sectionApp.png";
import appStore from "../../../assets/app-store-sectionApp.png";

const App = () => {
  return (
    <section className="container-page mt-16 px-2">
      <div className="text-center mb-8">
        <Link to={"#"} className="section-button">
          App
        </Link>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between md:items-start items-center gap-3">
        <article className="text-secondary-color md:py-8 py-2">
          <h2 className="max-w-md text-3xl font-bold">Get the Talktalk app</h2>

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
          <div className="flex justify-center gap-5 items-center mt-5">
            <div>
              <img className="w-28" decoding="async" loading="lazy" src={qrCode} />
            </div>
            <div className="flex flex-col gap-2">
              <img className="w-28" src={googlePlay} loading="lazy" decoding="async" />

              <img className="w-28" src={appStore} loading="lazy" decoding="async" />
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
  );
};

export default App;
