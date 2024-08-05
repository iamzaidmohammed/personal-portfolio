import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { useEffect } from "react";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return <RouterProvider router={router} />;
};

export default App;
