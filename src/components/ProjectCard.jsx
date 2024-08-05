import PropTypes from "prop-types";

const ProjectCard = ({ image, projectName, liveUrl, githubUrl, stack }) => {
  return (
    <div className="bg-NavColor h-full flex flex-col">
      <div className="overflow-hidden cursor-pointer h-48">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition-all"
        />
      </div>

      <div className="px-3 pb-2 flex-grow">
        <h2 className="text-xl py-2">{projectName}</h2>
        <div className="flex justify-start gap-2">
          {stack.map((stack, index) => (
            <small key={index} className="text-gray-400">
              {stack}
            </small>
          ))}
        </div>
        <div className="w-full flex justify-between items-baseline">
          <a
            className="border-b-2 border-b-NeonGreen pt-3 hover:border-b-white hover:text-NeonGreen"
            href={liveUrl}
            target="__blank"
          >
            Live Site
          </a>
          <a
            className="border-b-2 border-b-NeonGreen pt-3 hover:border-b-white hover:text-NeonGreen"
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
};

export default ProjectCard;
