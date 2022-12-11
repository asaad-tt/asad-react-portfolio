import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ProjectOne from "../Projects/ProjectOne/ProjectOne";
import ProjectThree from "../Projects/ProjectThree/ProjectThree";
import ProjectTwo from "../Projects/ProjectTwo/ProjectTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/projectOne",
    element: <ProjectOne></ProjectOne>,
  },
  {
    path: "/projectTwo",
    element: <ProjectTwo></ProjectTwo>,
  },
  {
    path: "/projectThree",
    element: <ProjectThree></ProjectThree>,
  },
]);

export default router;
