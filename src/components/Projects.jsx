import { NavLink } from "react-router-dom";
import CatsNCheese from "../assets/projects/cats-n-cheese.png";
import Project2 from "../assets/clipboard-landing-page.png";
import Project3 from "../assets/clipboard-landing-page.png";
import Project4 from "../assets/clipboard-landing-page.png";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <section className="py-10 w-full border-b-2" id="projects">
      <div className=" px-10">
        <h2 className="w-fit mx-auto text-6xl border-b-2 border-b-NeonGreen mb-10">
          Projects
        </h2>
        <div className="w-full flex flex-col items-center gap-y-5 md:grid md:grid-cols-2 md:gap-x-5 ">
          <ProjectCard
            image={CatsNCheese}
            projectName="Cats-N-Cheese Game"
            liveUrl={"https://cats-n-cheese.vercel.app/"}
            githubUrl={"https://github.com/sylfort/cats-n-cheese"}
            stack={["HTML", "CSS", "JS"]}
            data-aos="fade-right"
          />
          <ProjectCard
            image={Project2}
            projectName="Interactive Rating Component"
            liveUrl={"http://advice-generator-lake.vercel.app/"}
            githubUrl={"https://github.com/iamzaidmohammed/advice-generator"}
            stack={["HTML", "CSS", "JS"]}
            data-aos="fade-left"
          />
          <ProjectCard
            image={Project3}
            projectName="Product Card Preview Component"
            liveUrl={"http://product-card-preview-component.vercel.app/"}
            githubUrl={
              "https://github.com/iamzaidmohammed/product-card-preview-component"
            }
            stack={["HTML", "CSS", "JS"]}
            data-aos="fade-right"
          />
          <ProjectCard
            image={Project4}
            projectName="Clipboard Landing Page"
            liveUrl={"http://clipboard-landing-page-alpha-six.vercel.app/"}
            githubUrl={
              "https://github.com/iamzaidmohammed/clipboard-landing-page"
            }
            stack={["HTML", "CSS", "JS"]}
            data-aos="fade-left"
          />
        </div>

        <NavLink
          className="flex items-center justify-center md:justify-end"
          to="/projects"
        >
          <button className="border-b-2 border-b-NeonGreen mt-5 sm:text-xl">
            View All
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Projects;
