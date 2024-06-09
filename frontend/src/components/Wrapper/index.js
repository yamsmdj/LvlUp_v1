import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const index = ({ children }) => {
  return (
    <div className="blacki text-white flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default index;
