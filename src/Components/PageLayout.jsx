import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <SideMenu />
      <div className="ml-64 pt-32 px-10 bg-[#f8f8fad9] min-h-screen">
        {children}
      </div>
    </>
  );
}
