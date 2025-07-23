import logoImg from "../assets/images/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="pt-60 md:pt-50 py-32 [&_a]:text-slate-400 [&_a]:hover:text-white [&_a]:transition">
      <img src={logoImg} alt="Fylo logo" />
      <div className="grid md:grid-cols-5  xl:grid-cols-7 pt-10 text-white gap-3 md:gap-6 lg:gap-8 xl:gap-12 ">
        <div className="flex gap-7 md:gap-5 xl:col-span-2 text-slate-400">
          <div>
            <img src={locationIcon} alt="Address" />
          </div>
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at
            corrupti delectus consectetur, molestiae magnam, libero eligendi.
          </p>
        </div>
        <div className="flex flex-col  gap-5">
          <div>
            <Link to="#" className="inline-block">
              <div className="flex gap-5 md:gap-2 lg:gap-5 items-center">
                <img src={phoneIcon} alt="Phone" />
                +1-543-123-4567
              </div>
            </Link>
          </div>
          <div>
            <Link to="#" className="inline-block">
              <div className="flex gap-5 md:gap-2 lg:gap-5 items-center">
                <img src={emailIcon} alt="Email" />
                example@fylo.com
              </div>
            </Link>
          </div>
        </div>
        <div className="xl:col-start-5 pt-16 md:pt-0">
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Jobs</Link>
            </li>
            <li>
              <Link to="#">Press</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="pt-16 md:pt-0">
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Terms</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="flex self-baseline justify-center md:justify-end gap-5 pt-16 md:pt-0">
          <Link
            to="#"
            className="hover:[&>div]:border-accent-teal-200 hover:[&>div]:text-accent-teal-200"
          >
            <div className="border-2 border-slate-400 rounded-full p-2 transition">
              <FaFacebookF size={14} />
            </div>
          </Link>

          <Link
            to="#"
            className="hover:[&>div]:border-accent-teal-200 hover:[&>div]:text-accent-teal-200"
          >
            <div className="border-2 border-slate-400 rounded-full p-2 transition">
              <FaTwitter size={14} />
            </div>
          </Link>

          <Link
            to="#"
            className="hover:[&>div]:border-accent-teal-200 hover:[&>div]:text-accent-teal-200"
          >
            <div className="border-2 border-slate-400 rounded-full p-2 transition">
              <FaInstagram size={14} />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
