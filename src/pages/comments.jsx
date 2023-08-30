import Layout from "@/components/Layout";
import React from "react";
import "../app/globals.css";
import {BsFillTrashFill} from "react-icons/bs"
import Head from "next/head";

const Modal = () => {
  return (
    <>
      <dialog
        id="my_modal_1"
        className="modal bg-primary w-[40rem] shadow-lg shadow-light-green rounded-md"
      >
        <div className="modal-container p-8 rounded-md text-txt-gray">
          <form method="dialog" className="modal-box">
            <h3 className="font-semibold text-md">Mark</h3>
            <p className="">
              mark@gmail.com
            </p>
            <p className="py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto velit unde deleniti laborum libero delectus, dolorum dignissimos tempore saepe beatae?</p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

function comments() {
  return (
    <>
      <Head>
        <title>Admin - Comments</title>
      </Head>
      <Layout active="/comments">
        <main>
          <div className="bg-primary rounded-md m-6 p-8">
            <h2 className="text-white font-semibold text-2xl">User comments</h2>
            <div className="table w-full text-txt-gray">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b bg-primary text-txt-gray font-medium dark:border-neutral-500 dark:bg-neutral-600">
                          <tr>
                            <th scope="col" class="px-6 py-4">
                              #
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Name
                            </th>
                            <th scope="col" class="px-6 py-4">
                              E-mail
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Phone
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b even:bg-light-gray odd:bg-primary bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              1
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Mark</td>
                            <td class="whitespace-nowrap px-6 py-4">
                              mark@gmail.com
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              +251954736128
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <div
                                onClick={() => window.my_modal_1.showModal()}
                                className=" btn border-2 flex items-center justify-center text-center py-2 rounded-md text-light-green cursor-pointer border-light-green"
                              >
                                View comment
                              </div>
                            </td>
                            <td className="whitespace-nowrap py-4 text-2xl cursor-pointer text-[#ff1e00]">
                              <BsFillTrashFill />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal />
        </main>
      </Layout>
    </>
  );
}

export default comments;
