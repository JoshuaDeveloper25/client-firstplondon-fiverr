import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import talktalk from "../assets/talktalk.png";
import male from "../assets/male.jpg";
import Dropdown from "./Dropdown";

import talktalkApp from "../assets/talktalkapp.png";
import activateSim from "../assets/activatesim.png";
import getSimHome from "../assets/get-sim-home.svg";
import userGuides from "../assets/userguides.webp";
import aboutus from "../assets/aboutus.png";
import simMenu from "../assets/simMenu.png";
import guides from "../assets/guides.jpeg";
import rocket from "../assets/rocket.jpg";
import login from "../assets/login.png";
import help from "../assets/help.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import FooterMenu from "./FooterMenu";

const dropdowns = [
  {
    title: "Getting Started on TalkTalk",
    icon: rocket,
  },

  {
    title: "SIM Only Deals",
    image: male,
    icon: simMenu,
    links: [
      { label: "Best Only SIM Deals", link: "#" },
      { label: "Pay As You Go Deals", link: "#" },
      { label: "Monthly Rolling SIM Deals", link: "#" },
      { label: "Contract SIM Deals", link: "#" },
      { label: "Order Your Free SIM", link: "#" },
      { label: "Activate your SIM", link: "#" },
    ],
  },

  {
    title: "TalkTalkApp",
    icon: talktalkApp,
  },

  {
    title: "Step-by-Step Guides",
    image: userGuides,
    icon: guides,
    links: [
      { label: "Switching to us", link: "#" },
      { label: "Activate your SIM", link: "#" },
      { label: "PIN Code", link: "#" },
      { label: "Voicemail", link: "#" },
      { label: "PUK Code", link: "#" },
      { label: "How to Top-up", link: "#" },
    ],
  },

  {
    title: "About TalkTalk",
    image: male,
    icon: aboutus,
    links: [
      { label: "Why TalkTalk", link: "#" },
      { label: "Community", link: "#" },
      { label: "Roaming", link: "#" },
      { label: "International Calls", link: "#" },
      { label: "UK Rates", link: "#" },
      { label: "e-SIM", link: "#" },
    ],
  },

  {
    title: "Help",
    icon: help,
    link: "#",
  },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuResults, setMenuResults] = useState(dropdowns);
  const [isOpen, setIsOpen] = useState(false);

  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event?.target?.value);
    if (event?.target?.value) {
      setMenuResults(
        dropdowns.filter((item) =>
          item.title.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setMenuResults(dropdowns);
    }
  };

  return (
    <nav className="container-page bg-white px-4 py-4 rounded-md mt-5 mb-8">
      <div className="flex items-center justify-between">
        <img src={talktalk} className="h-10 block" />
        <RxHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          size={28}
          className="cursor-pointer lg:hidden"
        />

        <div
          ref={divRef}
          className={`fixed lg:static bg-white z-50 lg:min-h-0 min-h-svh w-full lg:max-w-full max-w-xs top-0 lg:-translate-x-[0] ${
            isOpen ? "-translate-x-[20rem]" : null
          } left-full`}
        >
          <div className="lg:flex lg:space-y-0 space-y-4 lg:p-5 p-0 lg:gap-5 lg:justify-end lg:overflow-y-visible overflow-y-auto max-h-screen">
            <div className="lg:hidden flex justify-end w-full cursor-pointer lg:px-0 px-5 pt-5">
              <IoCloseOutline
                onClick={() => setIsOpen(!isOpen)}
                size={28}
                className="lg:hidden text-red-500"
              />
            </div>

            <div className="lg:hidden lg:px-0 px-5">
              <input
                placeholder="Search"
                type="search"
                className="bootstrap-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {menuResults?.map((item, index) => {
              return <Dropdown key={index} info={item} />;
            })}

            <FooterMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
