import heroImg from "../assets/images/illustration-intro.png";
import heroBg from "../assets/images/bg-curvy-desktop.webp";
export default function Hero() {
  return (
    <section
      className="bg-bottom bg-no-repeat md:bg-contain bg-primary-navy-800 pb-32"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-[1472px] mx-auto px-7 md:px-4 pt-5 md:pt-0">
        <div className="text-white text-center max-w-[720px] mx-auto">
          <img
            src={heroImg}
            alt="Files stored in one secure folder."
            className="mx-auto "
          />
          <div>
            <h1 className="text-3xl md:text-[42px] font-semibold font-raleway py-10">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-base md:text-xl mx-auto max-w-[600px]">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <button
              type="button"
              className="bg-linear-to-r from-accent-teal-200 to-accent-cyan-500 font-semibold text-base md:text-xl block mx-auto w-full max-w-2xs md:max-w-[200px] mt-8 py-3 md:py-2 rounded-full cursor-pointer hover:to-accent-teal-200 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
