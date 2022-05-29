import React from "react";
import SideBar from "../comps/SideBar";

export default function layout({ children }) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
