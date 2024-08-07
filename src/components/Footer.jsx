import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3">
      <div className="max-w-7xl flex items-center md:px-5 lg:px-20 xl:mx-auto">
        <div className="flex justify-between items-center w-full px-5">
          <a href="#" className="logo text-2xl">
            iamzaidmohammed
          </a>

          <div className="flex items-center">
            <a
              href="https://github.com/iamzaidmohammed"
              target="__blank"
              className="mr-4 hover:text-accent transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/iamzaidmohammed"
              target="__blank"
              className="mr-4 hover:text-accent transition-colors"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/zaid-mohammed-zainudeen-bbb60a1bb/"
              target="__blank"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
