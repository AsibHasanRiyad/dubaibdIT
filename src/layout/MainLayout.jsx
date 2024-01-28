import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
