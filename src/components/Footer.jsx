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
                <h4>About Talktalk</h4>

                <ul>
                  <li className="flex items-center ">
                    <Link href="#">- Getting started on Talktalk</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Why Talktalk</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Community</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Roaming</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- International Calls</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- UK rates</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Talktap App</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- eSIM</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>SIM only deals</h4>
                <ul>
                  <li className="flex items-center ">
                    <Link href="#">- Best SIM only deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Pay as you go deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Monthly rolling SIM deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Contract SIM deals</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Order your free SIM</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Activate your SIM</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>Step-by-step guides</h4>
                <ul>
                  <li className="flex items-center ">
                    <Link href="#">- Switching to us</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Activate your Talktalk SIM</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- PIN Code</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Voicemail</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- PUK code</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- How to top-up</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- APN Internet Settings</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>Help</h4>
                <ul>
                  <li className="flex items-center ">
                    <Link href="#">- Service updates</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- FAQs</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>Contact Us</h4>

                <ul>
                  <li className="flex items-center ">
                    <Link href="#">- Ask the community</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Ask a Talktalk agent</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- Contact us</Link>
                  </li>
                  <li className="flex items-center ">
                    <Link href="#">- email: support@talktalk-sim.com</Link>
                  </li>
                </ul>

                <div className="flex gap-3 my-3">
                  <img
                    className="w-28"
                    src={googlePlay}
                    loading="lazy"
                    decoding="async"
                  />

                  <img
                    className="w-28"
                    src={appStore}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex justify-center gap-3 items-center">
                  <Link to="#">
                    <img src={twitter} className="w-8" loading="lazy" decoding="async" />
                  </Link>
                  <Link to="#">
                    <img src={facebook} className="w-8" loading="lazy" decoding="async" />
                  </Link>
                  <Link to="#">
                    <img src={linkedin} className="w-8" loading="lazy" decoding="async" />
                  </Link>
                  <Link to="#">
                    <img src={youtube} className="w-8" loading="lazy" decoding="async" />
                  </Link>
                  <Link to="#">
                    <img src={instagram} className="w-8" loading="lazy" decoding="async" />
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
