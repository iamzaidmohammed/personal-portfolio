import { FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard.jsx";
import { useEffect, useState } from "react";
import projectsInfo from "../data/ProjectsInfo";

const Projects = () => {
  const [toggleSort, setToggleSort] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    let filtered = projectsInfo;
    if (searchTerm !== "") {
      filtered = filtered.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((project) =>
        selectedFilters.every((filter) => project.stack.includes(filter))
      );
    }
    setFilteredProjects(filtered);
  }, [searchTerm, selectedFilters]);

  const handleSort = (sortBy) => {
    let sortedProjects = [];
    if (sortBy === "Most Recent") {
      sortedProjects = projectsInfo;
    } else if (sortBy === "Name") {
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    setFilteredProjects(sortedProjects);
    setToggleSort(false);
  };

  const handleFilterChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
  };

  return (
    <main className="bg-DarkMode text-white min-h-dvh">
      <section className="max-w-7xl flex flex-col items-center md:px-5 lg:px-20 xl:mx-auto">
        <section className="py-10 w-full border-b-2">
          <div className="px-10">
            <h2 className="w-fit mx-auto text-6xl border-b-2 border-b-NeonGreen mb-10">
              All Projects
            </h2>

            <div className="mb-10 flex items-center gap-2 w-full">
              <div className="relative w-full">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2 text-NeonGreen">
                  <FaSearch />
                </span>
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  className="appearance-none w-full rounded-l sm:rounded-l-none border-2 block pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white border-NeonGreen focus:border-2 focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </div>
              <div className="relative">
                <button
                  className="flex items-center justify-between bg-NeonGreen text-DarkMode sm:py-2 text-center sm:px-4 sm:w-[150px]"
                  onClick={() => {
                    setToggleSort(!toggleSort);
                    setToggleFilter(false);
                  }}
                >
                  Sort By {toggleSort ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {toggleSort && (
                  <div className="absolute right-0 mt-2 w-[150px] bg-white text-DarkMode rounded shadow-lg z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-NeonGreen"
                      onClick={() => handleSort("Most Recent")}
                    >
                      Most Recent
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-NeonGreen"
                      onClick={() => handleSort("Name")}
                    >
                      Name
                    </button>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="flex items-center justify-between bg-NeonGreen text-DarkMode sm:py-2 text-center sm:px-4 sm:w-[150px] sm:rounded-r"
                  onClick={() => {
                    setToggleFilter(!toggleFilter);
                    setToggleSort(false);
                  }}
                >
                  Filter By {toggleFilter ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {toggleFilter && (
                  <div className="absolute right-0 mt-2 w-[150px] bg-white text-DarkMode rounded shadow-lg z-10">
                    {[
                      "HTML",
                      "CSS",
                      "Tailwind",
                      "JS",
                      "React",
                      "API",
                      "PHP",
                      "MySQL",
                    ].map((filter) => (
                      <label
                        key={filter}
                        className="block w-full text-left px-4 py-2 cursor-pointer hover:bg-NeonGreen"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.includes(filter)}
                          onChange={() => handleFilterChange(filter)}
                          className="mr-2"
                        />
                        {filter}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${
                filteredProjects.length === 0
                  ? "w-full"
                  : "w-full flex flex-col items-center gap-y-5 md:grid md:grid-cols-2 md:gap-x-5"
              }`}
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    projectName={project.name}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    stack={project.stack}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  />
                ))
              ) : (
                <div className="text-center text-2xl w-full">
                  No projects found
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Projects;
