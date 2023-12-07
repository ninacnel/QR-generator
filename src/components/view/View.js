import React from "react";
import NavbarBasic from "../navbarBasic/NavbarBasic";

const View = ({ children }) => {
  return (
    <div>
      <NavbarBasic />
      {children}
    </div>
  );
};

export default View;
