import internationalCall from '../../../assets/international-calls.png';
import landline from '../../../assets/landline.png';
import mobile from '../../../assets/mobile.png';
import { useEffect, useRef, useState } from 'react';
import sms from '../../../assets/sms.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowDropdown } from 'react-icons/io';

const infoCountry = {
  '+7840': {
    landline: '30 p',
    mobile: '30 p',
    text: '8 p',
  },

  '+93': {
    landline: '30 p',
    mobile: '30 p',
    text: '8 p',
  },

  '+1': {
    landline: '14 p',
    mobile: '14 p',
    text: '8 p',
  },

  '+355': {
    landline: '60 p',
    mobile: '60 p',
    text: '8 p',
  },

  '+213': {
    landline: '£ 1,5',
    mobile: '£ 1,5',
    text: '8 p',
  },
};

const country = [
  {
    label: 'Abkhazia',
    value: '+7840',
  },

  {
    label: 'Afghanistan',
    value: '+93',
  },

  {
    label: 'Alaska',
    value: '+1',
  },

  {
    label: 'Albania',
    value: '+355',
  },

  {
    label: 'Algeria',
    value: '+213',
  },
];

const InternationalCalls = () => {
  const [countrySelected, setCountrySelected] = useState({});
  const [calling, setCalling] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [countryResult, setCountryResult] = useState(country);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value, label) => {
    setCalling(value);
    setCountrySelected(infoCountry[value]);
    setIsOpen(false);
    setSearchInput(`${label} ${value}`);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event?.target?.value);
    if (event?.target?.value) {
      setCountryResult(
        country.filter((item) =>
          `${item.label} ${item.value}`
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setCountryResult(country);
    }

    // if (!isOpen) return;
    setIsOpen(true);
  };

  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="container-page md:px-0 px-2 mt-16">
      <div className="text-center">
        <Link to={'#'} className="section-button">
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

        <div
          className="flex justify-center relative w-full max-w-lg mx-auto"
          ref={divRef}
        >
          <input
            className="w-full px-2 py-2 placeholder:text-gray-800"
            type="search"
            placeholder="Where are you calling?"
            onChange={handleSearchChange}
            value={searchInput}
          />
          <button
            className={` bg-black text-white`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <IoMdArrowDropdown
              size={50}
              className={`${isOpen && 'rotate-180'} transition-transform`}
            />
          </button>

          {isOpen && (
            <ul className="absolute top-full w-full bg-red-500 mt-5">
              {countryResult?.map((country, index) => {
                return (
                  <li key={index}>
                    <button
                      className="p-2 hover:bg-white w-full text-start"
                      onClick={() => handleChange(country.value, country.label)}
                    >
                      {country?.label} ({country.value})
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
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
