import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";

import googlePlay from "../assets/googleplayfooter.png";
import appStore from "../assets/appstorefooter.png";

import twitter from "../assets/x.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container-page mx-auto px-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:place-content-start place-content-center">
              <div className="footer-links">
                <h4 className="font-extrabold">About Talktalk</h4>

                <ul>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Getting started on Talktalk</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Why Talktalk</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Community</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Roaming</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- International Calls</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- UK rates</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Talktap App</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- eSIM</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4 className="font-extrabold">SIM only deals</h4>
                <ul>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Best SIM only deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Pay as you go deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Monthly rolling SIM deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Contract SIM deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Order your free SIM</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Activate your SIM</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4 className="font-extrabold">Step-by-step guides</h4>
                <ul>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Switching to us</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Activate your Talktalk SIM</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- PIN Code</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Voicemail</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- PUK code</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- How to top-up</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- APN Internet Settings</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4 className="font-extrabold">Help</h4>
                <ul>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Service updates</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- FAQs</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4 className="font-extrabold">Contact Us</h4>

                <ul>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Ask the community</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Ask a Talktalk agent</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- Contact us</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link to="#" className="text-sm font-extralight">- email: support@talktalk-sim.com</Link>
                  </li>
                </ul>

                <div className="flex gap-3 my-3">
                  <Link to={"https://play.google.com/store/games"}>
                    <img
                      className="w-28"
                      src={googlePlay}
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>

                  <Link to={"https://www.apple.com/la/app-store/"}>
                    <img
                      className="w-28"
                      src={appStore}
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                </div>

                <div className="flex justify-center gap-3 items-center">
                  <Link to="#" className="text-sm font-extralight">
                    <img
                      src={twitter}
                      className="w-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <Link to="#" className="text-sm font-extralight">
                    <img
                      src={facebook}
                      className="w-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <Link to="#" className="text-sm font-extralight">
                    <img
                      src={linkedin}
                      className="w-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <Link to="#" className="text-sm font-extralight">
                    <img
                      src={youtube}
                      className="w-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <Link to="#" className="text-sm font-extralight">
                    <img
                      src={instagram}
                      className="w-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mt-5">
              <p className="text-center">
                This website, www.talktalkuksim.com, is intended to inform and
                promote Talktalk´s plans, but we are not the official Talktalk
                website.{" "}
                <span className="md:block">
                  If you want to visit the official Talktalk´s website, click on
                  the following link: www.Talktalk.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#111] relative text-white lg:py-5 py-10 px-2">
        <div className="container-page mx-auto">
          <BackToTop />

          <div className="flex gap-4 flex-col md:flex-row justify-between">
            <div>
              <h4 className="md:text-start text-center">
                &copy; 2024 All Rights Reserved by www.talktalksim.com
              </h4>
            </div>

            <ul className="flex md:justify-between justify-center flex-wrap text-white">
              <li>
                <Link>
                  Privacy policy - <span className="me-1"></span>
                </Link>
              </li>
              <li>
                <Link>
                  Cookies policy - <span className="me-1"></span>
                </Link>
              </li>
              <li>
                <Link>
                  Terms & Conditions - <span className="me-1"></span>
                </Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
