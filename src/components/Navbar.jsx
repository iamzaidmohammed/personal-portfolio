import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-b-NeonGreen hover:border-b-NeonGreen transition-colors"
      : "hover:border-b-2 hover:border-b-NeonGreen transition-colors";

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-NavColor text-white shadow-sm py-3">
      <div className="max-w-7xl flex items-center md:px-5 lg:px-20 xl:mx-auto">
        <div className="flex justify-between items-center w-full px-5">
          <div>
            <a href="/" className="logo text-2xl">
              iamzaidmohammed
            </a>
          </div>
          <ul className="hidden xs:flex gap-4">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkClass}>
                Projects
              </NavLink>
            </li>
          </ul>

          <div className="xs:hidden">
            <GiHamburgerMenu
              size={22}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </div>

          <div
            className={`${
              toggleMenu ? "block" : "hidden"
            } xs:hidden fixed right-0 z-40 top-12 w-1/2 bg-NavColor`}
          >
            <div className="px-5 pt-1 pb-2 flex flex-col gap-3">
              <NavLink to="/" className={"w-full py-2 px-4 hover:bg-DarkMode"}>
                Home
              </NavLink>

              <NavLink
                to="/projects"
                className={"w-full py-2 px-4 hover:bg-DarkMode"}
              >
                Projects
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="flex justify-between">
  <a
    href="https://github.com/iamzaidmohammed"
    className="mr-4 hover:text-NeonGreen transition-colors"
  >
    <FaGithub />
  </a>
  <a
    href="https://twitter.com/iamzaidmohammed"
    className="mr-4 hover:text-NeonGreen transition-colors"
  >
    <FaXTwitter />
  </a>
  <a
    href="https://linkedin.com/iamzaidmohammed"
    className="hover:text-NeonGreen transition-colors"
  >
    <FaLinkedinIn />
  </a>
</div>; */
}
