import React from "react";
import "../../app/globals.css";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import Head from "next/head";

const Img = () => {
  return (
    <div className="relative mt-3">
      <Image height={100} width={100} src="/mark.jpg " />
      <div className="close absolute top-0 cursor-pointer">
        <IoMdCloseCircle size={20} />
      </div>
    </div>
  );
};

function CarDetails() {
  return (
    <>
      <Head>
        <title>Admin - BMW</title>
      </Head>
      <main className="bg-black flex justify-center">
        <div className="cont bg-black flex flex-col justify-center items-center mt-14 w-1/2">
          {/* User */}
          <div className="user bg-primary rounded-md h-auto  text-txt-gray px-14 py-8 w-full">
            <h2 className="text-white font-semibold text-2xl ">BMW</h2>
            <div className="images mt-10 grid grid-cols-5 gap-1">
              <Img />
              <Img />
              <Img />
              <Image
                src="/image.png"
                width={100}
                height={100}
                className="mt-3 cursor-pointer"
              />
            </div>
            <form className="mt-10" action="">
              {/* Name */}
              <p className="font-bold text-sm mt-5 mb-2">Name</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-primary ml-3"
              />
              {/* Daily Rate */}
              <p className="font-bold text-sm mt-5 mb-2">Daily Rate</p>
              <input
                type="number"
                placeholder="Daily rate"
                className="bg-primary ml-3"
              />
              {/* Dors */}
              <p className="font-bold text-sm mt-5 mb-2">Number of doors</p>
              <input
                type="number"
                placeholder="Doors"
                className="bg-primary ml-3"
              />
              {/* Seats */}
              <p className="font-bold text-sm mt-5 mb-2">Number of seats</p>
              <input
                type="number"
                placeholder="Doors"
                className="bg-primary ml-3"
              />
              <p className="font-bold text-sm mt-5 mb-2">Discription</p>
              <textarea
                name="discription"
                id=""
                cols="30"
                rows="5"
                className="w-full bg-primary"
              ></textarea>
            </form>
            <div className="btn-container mt-5 flex justify-center">
              <div className="btn bg-light-green text-white px-6 rounded-md cursor-pointer py-2">
                Update
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CarDetails;
