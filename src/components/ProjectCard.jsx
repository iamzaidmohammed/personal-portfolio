import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({
  image,
  projectName,
  liveUrl,
  githubUrl,
  stack,
  description,
  "data-aos": aos,
}) => {
  const [isLess, setIsLess] = useState(true);
  const isDescriptionLong = description.length > 80;

  let projectDesc =
    isLess && isDescriptionLong ? description.slice(0, 80) : description;

  return (
    <div className="bg-secondary h-full flex flex-col" data-aos={aos}>
      <div className="overflow-hidden cursor-pointer h-48">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition-all"
        />
      </div>

      <div className="px-3 pb-2 flex-grow">
        <h2 className="text-xl py-2">{projectName}</h2>
        <div className="mb-3">
          <p className="text-gray-400 text-sm">{projectDesc}</p>
          {isDescriptionLong && (
            <small
              className="text-gray-400 cursor-pointer"
              onClick={() => setIsLess(!isLess)}
            >
              {isLess ? "more..." : "less"}
            </small>
          )}
        </div>
        <div className="flex justify-start gap-2">
          {stack.map((stack, index) => (
            <small key={index} className="text-gray-400">
              {`[${stack}]`}
            </small>
          ))}
        </div>
        <div className="w-full flex justify-between items-baseline">
          <a
            className="border-b-2 border-b-accent pt-3 hover:border-b-white hover:text-accent"
            href={liveUrl}
            target="__blank"
          >
            Live Site
          </a>
          <a
            className="border-b-2 border-b-accent pt-3 hover:border-b-white hover:text-accent"
            href={githubUrl}
            target="__blank"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  "data-aos": PropTypes.string,
};

export default ProjectCard;
