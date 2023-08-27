import React, { useEffect } from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";
import { BsPeople, BsChatLeftText } from "react-icons/bs";
import Link from "next/link";

function SideBar({ active }) {
  const NavData = [
    { name: "Dashboard", url: "/dashboard", icon: <BsSpeedometer2 /> },
    { name: "Cars", url: "/cars", icon: <LiaCarSideSolid /> },
    { name: "Employees", url: "/employees", icon: <BsPeople /> },
    { name: "Comments", url: "/comments", icon: <BsChatLeftText /> },
  ];
  // useEffect(() => {}, [document.location.href.split("/")[3]]);
  return (
    <main className="">
      <div className="bg-primary text-txt-gray h-full">
        <div className="p-8">
          {/* Title */}
          <h2 className="font-mono text-white font-bold text-2xl spacing-5 tracking-[.3em]">
            RIDERENT
          </h2>
          {/* Profile */}
          <div className="flex mt-6">
            <img
              src="https://picsum.photos/200/200"
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <div className="ml-5">
              <h3 className="text-white">Biniam D</h3>
              <p className="text-xs">Gold Member</p>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <h4 className="font-bold text-xs mt-4 mx-8">Navigation</h4>
        <ul className="mt-4 ">
          {NavData.map((item, index) => {
            return (
              <Link href={`${item.url}`}>
                <li
                  index={index}
                  className={`flex text-[15px] font-semibold items-center py-3 cursor-pointer px-5 ${
                    item.url == active ? "active-bar" : ""
                  }`}
                >
                  <p>{item.icon}</p>
                  <p className="ml-2">{item.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}


export default SideBar;
