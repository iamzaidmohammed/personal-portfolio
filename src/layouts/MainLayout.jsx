import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // animation duration in milliseconds
  //   });
  // }, []);

  // useEffect(() => {
  //   AOS.refresh(); // Refresh AOS on route change
  // });

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
