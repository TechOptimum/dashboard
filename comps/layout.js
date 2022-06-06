import React from "react";
import SideBar from "./SideBar";

export default function layout({ children }) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
