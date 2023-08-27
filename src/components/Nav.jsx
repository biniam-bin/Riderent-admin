import React from "react";
import { BiSolidBell } from "react-icons/bi";


function Nav() {
    return (
      <main className="sticky">
        <div className="bg-primary h-16 text-white flex items-center justify-between cursor-pointer px-10">
          <div className="">
            <input type="text" placeholder="Search" className="border-light-gray text-sm bg-primary border-[1.5px] rounded-md px-6 py-1" />
          </div>
          <div className="text-xl">
            <BiSolidBell />
            <div className="h-2 w-2 absolute top-5 right-10 rounded-full bg-light-green"></div>
          </div>
        </div>
      </main>
    );
}

export default Nav;
