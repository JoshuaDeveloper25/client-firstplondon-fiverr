import internationalCall from "../../../assets/international-calls.png";
import landline from "../../../assets/landline.png";
import mobile from "../../../assets/mobile.png";
import { useEffect, useState } from "react";
import sms from "../../../assets/sms.png";
import { Link } from "react-router-dom";

const InternationalCalls = () => {
  const [countries, setCountries] = useState([]);
  const [calling, setCalling] = useState("");
0
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
      setCountries(countries);
    };

    fetchCountryData();
  }, []);

  return (
    <section className="container-page md:px-0 px-2 mt-16">
      <div className="text-center">
        <Link to={"#"} className="section-button">
          International Calls
        </Link>
      </div>

      <div>
        <img
          className="my-5 mx-auto"
          src={internationalCall}
          decoding="async"
          loading="lazy"
        />

        <h2 className="text-3xl text-center font-bold">Calling from the UK</h2>
        <p className="max-w-5xl mx-auto text-center my-4">
          Staying in touch with your friends and family should be super easy, no
          matter where they are in the world. That’s why we offer great value
          international rates to our members when calling from the UK.
        </p>

        <div className="flex justify-center">
          <input
            className="px-2 py-2"
            type="text"
            placeholder="Where are you calling?"
            value={calling}
          />
          <select
            className="bg-black text-white py-2 w-24"
            onChange={(e) => setCalling(e?.target?.value)}
          >
            <option value={``}>-- Select --</option>
            {countries?.map((country, index) => {
              const { name } = country;

              return <option key={index}>{name?.common}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap text-center sm:items-start items-center justify-evenly gap-8 mt-10">
        <div className="min-w-[10rem]">
          <img
            className="w-10 mx-auto"
            src={landline}
            loading="lazy"
            decoding="async"
          />
          <h2 className="font-bold text-2xl my-4">Landline</h2>
          <h2 className="font-bold text-2xl">6p</h2>
        </div>

        <div className="min-w-[10rem]">
          <img
            className="w-10 mx-auto"
            src={mobile}
            loading="lazy"
            decoding="async"
          />
          <h2 className="font-bold text-2xl my-4">Mobile</h2>
          <h2 className="font-bold text-2xl">8p</h2>
        </div>

        <div className="min-w-[10rem]">
          <img
            className="w-10 mx-auto"
            src={sms}
            loading="lazy"
            decoding="async"
          />
          <h2 className="font-bold text-2xl my-4">Text</h2>
          <h2 className="font-bold text-2xl">6p</h2>
        </div>
      </div>
    </section>
  );
};

export default InternationalCalls;
