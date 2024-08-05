import { NavLink } from "react-router-dom";
import projectsInfo from "../data/ProjectsInfo";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  const projects = projectsInfo.slice(0, 4);

  return (
    <section className="py-10 w-full border-b-2" id="projects">
      <div className=" px-10">
        <h2 className="w-fit mx-auto text-6xl border-b-2 border-b-NeonGreen mb-10">
          Recent Projects
        </h2>
        <div className="w-full flex flex-col items-center gap-y-5 md:grid md:grid-cols-2 md:gap-x-5 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              projectName={project.name}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              stack={project.stack}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            />
          ))}
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
