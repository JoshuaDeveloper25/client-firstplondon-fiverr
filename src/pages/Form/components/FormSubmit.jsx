import IncludedFeatures from "../../../components/IncludedFeatures";
import { InputForm } from "../../../components/InputForm";
import blueCard from "../../../assets/blue-card-alt.png";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";

const FormSubmit = ({ form, handleSubmit, capVal, setCapVal }) => {
  return (
    <section className="bg-white py-10 px-2 mt-14">
      <div className="container-page">
        <div className="flex gap-8 flex-col sm:flex-row">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div>
                <img
                  className="w-28"
                  loading="lazy"
                  decoding="async"
                  src={blueCard}
                />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Get your free SIM the next day
                </h3>
                <p className="text-gray-800 mt-2">
                  Order your free giffgaff SIM before 5.00pm for next day
                  delivery. It's just that simple.
                </p>
              </div>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <InputForm
                    inputLabelHolder={"First name"}
                    inputName={"user_name"}
                    inputType={"text"}
                  />
                </div>

                <div className="flex-1">
                  <InputForm
                    inputLabelHolder={"Last name"}
                    inputName={"sur_name"}
                    inputType={"text"}
                  />
                </div>
              </div>

              <InputForm
                inputLabelHolder={"Email"}
                inputName={"email_id"}
                inputType={"email"}
              />

              <InputForm
                inputLabelHolder={"Country"}
                inputName={"country"}
                inputType={"text"}
              />

              <InputForm
                inputLabelHolder={"Address line 1"}
                inputName={"addressLine1"}
                inputType={"text"}
              />

              <InputForm
                inputLabelHolder={"Address line 2 (optional)"}
                inputName={"addressLine2"}
                inputType={"text"}
                required={false}
              />

              <InputForm
                inputLabelHolder={"Town"}
                inputName={"town"}
                inputType={"text"}
              />

              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <InputForm
                    inputLabelHolder={"State"}
                    inputName={"state"}
                    inputType={"text"}
                  />
                </div>
                <div className="flex-1">
                  <InputForm
                    inputLabelHolder={"Postcode"}
                    inputName={"postcode"}
                    inputType={"number"}
                  />
                </div>
              </div>

              <p className="text-gray-800">
                You accept our{" "}
                <Link to={"#"} className="text-[#0069ff]">
                  terms and conditions
                </Link>{" "}
                and{" "}
                <Link to={"#"} className="text-[#0069ff]">
                  privacy policy
                </Link>{" "}
                by clicking below.
              </p>

              <div className="text-center mt-3">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPCHA_KEY_BASE_URL}
                  onChange={(e) => setCapVal(e)}
                />
                <button
                  disabled={!capVal}
                  type="submit"
                  className="rounded-full px-3 py-3 text-white font-bold background-gradient mt-3"
                >
                  Order your Free Talktalk SIM{" "}
                  <FiSend className="inline size-6 ms-1" />
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1">
            <div className="bg-[#D9FFEC] rounded-lg p-5">
              <h3 className="text-xl font-bold mb-3">What is included</h3>

              <IncludedFeatures className={"mb-3"}>
                <span className="font-bold">1 GB data</span>
              </IncludedFeatures>

              <IncludedFeatures className={"mb-3"}>
                <span className="font-bold">No contract.</span> Our flexible
                monthly plans give you the freedom to
                <span className="font-bold">
                  {" "}
                  change your plan from month to month.
                </span>
              </IncludedFeatures>

              <IncludedFeatures className={"mb-3"}>
                <span className="font-bold">Unlimited UK calls and texts.</span>
              </IncludedFeatures>

              <IncludedFeatures className={"mb-3"}>
                <span className="font-bold">3-IN- SIM.</span> Standard, Micro
                and Nano formats on a single card.
              </IncludedFeatures>

              <IncludedFeatures className={"mb-3"}>
                <span className="font-bold">4G-</span>ready and get{" "}
                <span className="font-bold">5G</span> using a 5G SIM and phone.
              </IncludedFeatures>

              <IncludedFeatures className={"mb-3"}>
                <span className="font-bold">EU roaming included.</span> Use your
                phone in the EU and selected destinations just like you would at
                home, at no extra cost.
              </IncludedFeatures>

              <IncludedFeatures>
                <span className="font-bold">Support 24/7.</span> Get support
                from our fast and friendly team and online community.
              </IncludedFeatures>
            </div>

            <div className="bg-[#F8C5C6] rounded-lg p-5 mt-4">
              <h3 className="text-xl font-bold mb-3">What's not included</h3>

              <IncludedFeatures errorImage={true} className={"mb-3"}>
                Roaming <span className="font-bold">outside the EU</span> and
                selected destinations
              </IncludedFeatures>

              <IncludedFeatures errorImage={true} className={"mb-3"}>
                International calls and texts
              </IncludedFeatures>

              <IncludedFeatures errorImage={true}>
                <span className="font-bold">If you need any of these, </span>
                just make sure to add a little credit to your account and we’ll
                charge you for them on a pay as you go basis.
              </IncludedFeatures>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSubmit;
