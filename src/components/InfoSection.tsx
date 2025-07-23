import { Link } from "react-router-dom";
import collabImg from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg";

export default function InfoSection() {
  return (
    <section className="flex flex-col md:flex-row pb-32 items-center justify-center gap-15 max-w-6xl mx-auto">
      <div>
        <img src={collabImg} alt="Team collaboration" />
      </div>
      <div className="text-white basis-1/2">
        <h2 className="text-xl md:text-4xl font-bold md:font-semibold pb-4 font-raleway">
          Stay productive,
          <br className="hidden xl:inline" /> wherever you are
        </h2>
        <p className="pb-4 text-base">
          Never let location be an issue when accessing your files, Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="pb-4 text-base">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <Link className="inline-block" to="#">
          <div className="relative text-base flex items-center gap-2 after:absolute after:w-full after:h-[1px] after:bg-accent-teal-200 after:-bottom-1 text-accent-teal-200">
            <span>See how Fylo works</span>{" "}
            <span>
              <img src={arrowIcon} alt="" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
