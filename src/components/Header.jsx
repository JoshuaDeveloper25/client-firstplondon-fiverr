import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import talktalk from "../assets/talktalk.png";
import React, { useState } from "react";
import male from "../assets/male.jpg";

import aboutus from "../assets/aboutus.png";
import getSimHome from "../assets/get-sim-home.svg";
import guides from "../assets/guides.jpeg";
import help from "../assets/help.png";
import login from "../assets/login.png";
import rocket from "../assets/rocket.jpg";
import talktalkApp from "../assets/talktalkapp.png";
import userGuides from "../assets/userguides.webp";
import simMenu from "../assets/simMenu.png";
import activateSim from "../assets/activatesim.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5">
      <header id="navbar" className="bg-white rounded-xl py-5 px-5">
        <div className="mx-auto">
          <div className="flex justify-between items-center">
            <div className="">
              <img src={talktalk} className="h-10 block" />
            </div>

            <button
              className="lg:hidden absolute right-10 text-3xl"
              onClick={() => setIsOpen(true)}
            >
              <RxHamburgerMenu />
            </button>

            <nav
              id=""
              className={`lg:relative z-50
             ${isOpen ? null : "hidden lg:block"}`}
            >
              <ul
                id={`${isOpen ? "active-side" : null}`}
                className={`bg-white z-50 transition-transform
              ${isOpen ? "translate-x-0" : "translate-x-full"}
              min-h-svh top-0 right-0 p-5 nav-menu absolute
             lg:translate-x-0 lg:p-0 lg:min-h-full lg:static lg:overflow-y-visible overflow-y-auto lg:overflow-x-visible overflow-x-hidden flex lg:items-center items-start flex-col lg:flex-row`}
              >
                <li className="text-end w-full lg:hidden pt-5 pe-3 pb-2">
                  <button
                    className="text-red-500 text-3xl"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoCloseOutline />
                  </button>
                </li>

                <li className="lg:hidden">
                  <input
                    placeholder="Search"
                    type="search"
                    className="bootstrap-input"
                  />
                </li>

                <li className="menu-active lg:pt-0 pt-4">
                  <img src={rocket} className="lg:hidden w-8 inline" />{" "}
                  <a href="#">
                    {" "}
                    <span className="ps-1">Getting Started on TalkTalk</span>
                  </a>
                </li>

                <li className="menu-has-children ">
                  <img src={simMenu} className="lg:hidden w-8 inline" />
                  <a href="#">
                    <span className="ps-2">Sim Only Deals</span>
                    <IoIosArrowDown className="self-end w-full inline" />
                  </a>
                  <ul className="top-20">
                    <li>
                      <a href="#">Best SIM Only Deals</a>
                    </li>
                    <li>
                      <a href="#">Pay As You Go Deals</a>
                    </li>
                    <li>
                      <a href="#">Monthly Rolling SIM Deals</a>
                    </li>
                    <li>
                      <a href="#">Contract SIM Deals</a>
                    </li>
                    <li>
                      <a href="#">Order Your Free SIM</a>
                    </li>
                    <li>
                      <a href="#">Activate Your SIM</a>
                    </li>
                    <li className="menu-img">
                      <img src={male} />
                    </li>
                  </ul>
                </li>

                <li className="">
                  {" "}
                  <img
                    src={talktalkApp}
                    className="lg:hidden w-8 inline"
                  />{" "}
                  <a href="#">
                    <span className="ps-1">TalkTalk App</span>
                  </a>
                </li>

                <li className="menu-has-children ">
                  <img src={guides} className="lg:hidden w-8 inline" />{" "}
                  <a href="#">
                    <span className="lg:ps-0 ps-1">Step-by-Step Guides</span>
                    <IoIosArrowDown className="inline lg:ps-4 ps-4 size-8" />
                  </a>
                  <ul className="">
                    <li>
                      <a href="#">Switching to us</a>
                    </li>
                    <li>
                      <a href="#">Activate Your SIM</a>
                    </li>
                    <li>
                      <a href="#">PIN Code</a>
                    </li>
                    <li>
                      <a href="#">Voicemail</a>
                    </li>
                    <li>
                      <a href="#">PUK Code</a>
                    </li>
                    <li>
                      <a href="#">How to Top-up</a>
                    </li>
                    <li className="lg:hidden">
                      <img className="rounded" src={userGuides} />
                    </li>
                    <li className="menu-img">
                      <img src={male} />
                    </li>
                  </ul>
                </li>

                <li className="menu-has-children">
                  <img src={aboutus} className="lg:hidden w-7 inline" />{" "}
                  <a href="#">
                    <span className="ps-2">About TalkTalk</span>
                    <IoIosArrowDown className="w-full inline ps-1" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Why TalkTalk</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Roaming</a>
                    </li>
                    <li>
                      <a href="#">International Calls</a>
                    </li>
                    <li>
                      <a href="#">UK Rates</a>
                    </li>
                    <li>
                      <a href="#">e-SIM</a>
                    </li>
                    <li className="menu-img">
                      <img src={male} />
                    </li>
                  </ul>
                </li>

                <li className="menu-has-children">
                  <img src={help} className="lg:hidden w-9 inline" />{" "}
                  <a href="#" className="w-full">
                    Help
                    <IoIosArrowDown className="text-end inline w-full lg:ps-0 ps-[5.6rem]" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src={getSimHome}
                          className="inline w-10"
                          loading="lazy"
                          decoding="async"
                        />{" "}
                        Order your free SIM
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={activateSim}
                          className="inline w-10"
                          loading="lazy"
                          decoding="async"
                        />{" "}
                        Activate your SIM
                      </a>
                    </li>
                    <div className="h-[.1rem] w-full bg-gray-600 mx-5"></div>
                    <li>
                      <a href="#" className="block text-center w-full">
                        <img
                          src={login}
                          className="inline w-8 mx-auto"
                          loading="lazy"
                          decoding="async"
                        />{" "}
                        <span className="ps-2 ">Log In</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
