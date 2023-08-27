import React from "react";
import SideBar from "./SideBar";
import Nav from "./Nav";

function Layout({ children, active }) {
  return (
    <main>
      <div className="grid h-screen grid-flow-col grid-cols-[17rem_auto]">
        {/* Sidebar */}
        <SideBar active={active} />
        <div className="bg-black"><Nav/>{children}</div>
      </div>
    </main>
  );
}

export default Layout;
