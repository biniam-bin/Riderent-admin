import React from "react";
import "../app/globals.css";
function login() {
  return (
    <main className=" bg-[#000000] h-screen w-full flex justify-center items-center">
      <div className="login-container bg-primary rounded-md  p-10 flex flex-col items-center">
        <h2 className="text-3xl mb-6 font-bold text-white">Login</h2>
        {/* Form */}
        <form action="" className="flex flex-col">
          <input
            type="text"
            className="focus:outline-none bg-light-gray px-3 py-2 rounded-sm text-black my-2"
            placeholder="Username"
          />
          <input
            type="text"
            className="focus:outline-none bg-light-gray px-3 py-2 rounded-sm text-black my-2"
            placeholder="Password"
          />
          <button className="bg-light-green my-5 py-3 rounded-full text-white">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default login;
