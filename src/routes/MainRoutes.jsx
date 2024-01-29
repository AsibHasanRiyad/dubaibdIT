import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/ContactPage/ContactPage";

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
      {
        path: "/contactPage",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
