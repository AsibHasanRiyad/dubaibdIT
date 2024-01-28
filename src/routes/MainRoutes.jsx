import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutPage",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
