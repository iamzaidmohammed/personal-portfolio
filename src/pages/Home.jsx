import HeroImg from "../assets/hero-img.webp";
import Skills from "../components/Skills";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
  return (
    <main className="bg-primary text-white">
      <section className="max-w-7xl flex flex-col items-center md:px-5 lg:px-20 xl:mx-auto">
        <section className="px-5 flex flex-col-reverse items-center sm:flex-row border-b-2">
          <div
            className="text-center sm:text-start basis-1/2"
            data-aos="fade-right"
          >
            <h2 className="text-4xl mb-2">Hello, World.</h2>
            <h3 className="text-xl mb-3">
              My name is Zaid Mohammed Zainudeen.
            </h3>
            <p>
              I am a{" "}
              <span className="border-b-2 border-b-accent">
                Full Stack Developer
              </span>{" "}
              based in Ghana with 3+ years experience building well tested
              Frontend and Full Stack Website.
            </p>

            <a href="#projects">
              <button className="mt-5 mb-8 sm:mb-0 border-b-2 border-b-accent">
                Featured Projects
              </button>
            </a>
          </div>

          <div className="basis-1/2 mb-5 sm:mb-0" data-aos="fade-left">
            <img src={HeroImg} alt="hero section image" />
          </div>
        </section>

        <Skills />

        <Projects />

        <Contact />
      </section>
    </main>
  );
};

export default Home;
