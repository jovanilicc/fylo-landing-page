import { useRef, useState } from "react";

export default function Contact() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current?.value;

    if (!email?.includes("@")) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    console.log(email);
  };
  return (
    <section>
      <div className="text-white text-center p-10 md:pt-15 md:pb-10 md:px-20 bg-primary-navy-850 rounded-xl max-w-5xl mx-auto relative top-40 md:top-28 shadow-[4px_4px_8px] shadow-slate-950">
        <h2 className="text-xl md:text-4xl font-raleway font-semibold pb-5">
          Get early access today
        </h2>
        <p className="md:text-base  md:px-15 pb-10">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:items-center gap-8 text-base "
        >
          <div className="md:flex-1 relative">
            <input
              ref={emailRef}
              aria-label="Your email"
              id="email"
              name="email"
              type="text"
              placeholder="email@example.com"
              className="bg-white rounded-full w-full py-3 px-5 md:px-10 text-slate-900 placeholder:text-gray-300 font-semibold"
            />
            <p className="absolute md:left-10 font-bold text-accent-red-500 text-[12px] md:text-[15px] -bottom-6 md:-bottom-7">
              {error && "Please enter a valid email address"}
            </p>
          </div>
          <div className="md:basis-1/4">
            <button className="bg-linear-to-r from-accent-teal-200 to-accent-cyan-500 font-semibold w-full py-3 rounded-full cursor-pointer hover:to-accent-teal-200">
              Get Started For Free
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
