import React from "react";
import Fonts from "./fonts";
import SideBar from "./SideBar";

export default function layout({ children }) {
  return (
    <>
      <Fonts />
      <SideBar />
      {children}
    </>
  );
}
