import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InfoSection from "./components/InfoSection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function Homepage() {
  return (
    <>
      <div className="bg-primary-navy-800">
        <div className="max-w-[1472px] mx-auto px-4 ">
          <Header />
        </div>
      </div>
      <div className="bg-primary-navy-900">
        <main>
          <Hero />
          <div className="px-7 md:px-4 bg-primary-navy-900">
            <div className="max-w-[1472px] mx-auto ">
              <Features />
              <InfoSection />
              <Reviews />
              <Contact />
            </div>
          </div>
        </main>
        <div className="bg-primary-navy-950">
          <div className="max-w-[1472px] mx-auto px-7 md:px-4">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
