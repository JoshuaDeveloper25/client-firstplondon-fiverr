import internationalCall from "../../../assets/international-calls.png";
import landline from "../../../assets/landline.png";
import mobile from "../../../assets/mobile.png";
import { useEffect, useState } from "react";
import sms from "../../../assets/sms.png";
import { Link } from "react-router-dom";
import axios from "axios";

const infoCountry = {
  "+504": {
    landline: "30 p",
    mobile: "30 p",
    text: "8 p",
  },

  "+93": {
    landline: "30 p",
    mobile: "30 p",
    text: "8 p",
  },

  "+1": {
    landline: "14 p",
    mobile: "14 p",
    text: "8 p",
  },

  "+355": {
    landline: "60 p",
    mobile: "60 p",
    text: "8 p",
  },

  "+213": {
    landline: "£ 1,5",
    mobile: "£ 1,5",
    text: "8 p",
  },
};

const InternationalCalls = () => {
  const [countrySelected, setCountrySelected] = useState({});
  const [countries, setCountries] = useState([]);
  const [calling, setCalling] = useState("");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countries = await response.data;
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountryData();
  }, []);

  const handleChange = (e) => {
    setCalling(e?.target?.value);
    infoCountry[e?.target?.value];
    console.log(infoCountry[e?.target?.value]);
    setCountrySelected(infoCountry[e?.target?.value]);
  };

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
            defaultValue={calling}
            disabled
          />
          <select
            className="bg-black text-white py-2 w-24"
            onChange={handleChange}
          >
            <option defaultValue={``}>-- Select --</option>
            {countries?.map((country, index) => {
              const { name } = country;
              const union = country?.idd?.root + country?.idd?.suffixes?.[0];

              return (
                <option value={union} key={index}>
                  {name?.common}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {countrySelected && countrySelected?.landline ? (
        <div className="flex flex-wrap text-center sm:items-start items-center justify-evenly gap-8 mt-10">
          <div className="min-w-[10rem]">
            <img
              className="w-10 mx-auto"
              src={landline}
              loading="lazy"
              decoding="async"
            />
            <h2 className="font-bold text-2xl my-4">Landline</h2>
            <h2 className="font-bold text-2xl">{countrySelected?.landline}</h2>
          </div>

          <div className="min-w-[10rem]">
            <img
              className="w-10 mx-auto"
              src={mobile}
              loading="lazy"
              decoding="async"
            />
            <h2 className="font-bold text-2xl my-4">Mobile</h2>
            <h2 className="font-bold text-2xl">{countrySelected?.mobile}</h2>
          </div>

          <div className="min-w-[10rem]">
            <img
              className="w-10 mx-auto"
              src={sms}
              loading="lazy"
              decoding="async"
            />
            <h2 className="font-bold text-2xl my-4">Text</h2>
            <h2 className="font-bold text-2xl">{countrySelected?.text}</h2>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default InternationalCalls;
