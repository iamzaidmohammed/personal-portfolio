import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="max-w-7xl flex items-center md:px-5 lg:px-20 xl:mx-auto">
      <div className="px-5 text-center w-full pt-16 h-full min-h-dvh">
        <h1 className="text-6xl">404</h1>
        <h2 className="text-3xl mt-2 mb-5">
          Oops!! The page you are looking for does not exist.
        </h2>
        <Link to="/" className="border-b-2 border-b-NeonGreen">
          Go To Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
