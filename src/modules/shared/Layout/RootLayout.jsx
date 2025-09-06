import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
// import NavbarDrawer from "./NavbarDrawer";

const RootLayout = () => {
  return (
    <div className="">
      <div
        className="sticky top-0 z-50   
              text-black 
              backdrop-blur-md"
      >
        <Navbar />
      </div>
      {/* <NavbarDrawer /> */}
      <div className="min-h-[60vh] w-11/12 mx-auto ">
        <Outlet />
      </div>
      <div className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]">
        {/* <CommonFooter /> */}
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
