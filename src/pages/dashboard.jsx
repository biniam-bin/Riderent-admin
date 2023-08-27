import Layout from "@/components/Layout";
import React from "react";
import "../app/globals.css";
import {
  BsArrowUpRight,
  BsArrowDownLeft,
  BsFillTrashFill,
} from "react-icons/bs";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title
);
import {
  doughnutData,
  doughnutOption,
  lineData,
  lineOptions,
} from "../utils/data";

import Calendar from "react-calendar";

const Card = ({ amount, percent, text, dxn }) => {
  return (
    <>
      <div className="card bg-primary flex justify-between items-center rounded-md py-8 px-8 w-full">
        <div className="left">
          <div className="flex">
            <h2 className="text-white text-3xl font-bold">${amount}</h2>
            <h4
              className={`font-semibold ${
                dxn ? "text-light-green" : "text-[#dc3545]"
              } text-sm ml-1`}
            >
              {dxn ? "+" : "-"}
              {percent}%
            </h4>
          </div>
          <p className="text-txt-gray no-wrap text-sm mt-1">{text}</p>
        </div>
        <div className="right">
          <div
            className={`icon-container ${
              dxn
                ? "text-light-green bg-[#00d25b1c]"
                : "text-[#dc3545] bg-[#fc424a1c]"
            } flex items-center justify-center w-10 h-10 rounded-md `}
          >
            {dxn ? <BsArrowUpRight /> : <BsArrowDownLeft />}
          </div>
        </div>
      </div>
    </>
  );
};

const Task = () => {
  return (
    <div className="task my-2 grid py-3 grid-cols-[3rem_auto_3rem] border-b-2">
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          class="text-light-green rounded-sm focus:ring-light-green"
        />
      </div>
      <div className="text-txt-gray">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, cum!
      </div>
      <div className="flex items-center justify-center text-[#ff1e00] text-xl cursor-pointer">
        <BsFillTrashFill />
      </div>
    </div>
  );
};
function dashboard() {
  return (
    <>
      <Layout active="/dashboard">
        <main className="bg-black">
          {/* Top Cards */}
          <div className="grid grid-cols-4 gap-6 mt-6 px-6">
            <Card
              amount={12.34}
              percent={3.5}
              text={`Potential growth`}
              dxn={true}
            />
            <Card
              amount={17.34}
              percent={4.1}
              text={`Revenue current`}
              dxn={true}
            />
            <Card
              amount={12.34}
              percent={2.6}
              text={`Daily Income`}
              dxn={false}
            />
            <Card
              amount={26.41}
              percent={5.2}
              text={`Expense current`}
              dxn={true}
            />
          </div>
          {/* Graphs */}
          <div className="grid grid-cols-[22rem_auto] px-6 mt-10 gap-6">
            <div className="bg-primary px-10 pb-10 rounded-md">
              <h2 className="text-xl font-bold text-white my-6">
                Transaction History
              </h2>
              <Doughnut data={doughnutData} options={doughnutOption} />
            </div>
            <div className="bg-primary rounded-md">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>
          {/* Bottom Cards (Todo) */}
          <div className=" bg-primary m-6 rounded-md p-8 flex items-start justify-between">
            <div className="form left">
              <input
                type="text"
                placeholder="Todo.."
                className=" bg-primary focus:outline-none border-light-gray border-2 text-white px-3 py-2"
              />
              <div className="btn bg-light-green mt-5 flex text-center items-center justify-center px-5 py-2 rounded-full cursor-pointer text-white font-mono">
                Add Todo
              </div>
            </div>
            <div className=" w-full ml-16">
              <h2 className="text-white font-semibold text-2xl">Tasks</h2>
              {/* Task */}
              <Task/>
              <Task/>
              <Task/>
              <Task/>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default dashboard;
