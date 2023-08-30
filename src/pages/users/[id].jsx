import React from "react";
import "../../app/globals.css";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

function UserDetail() {
  return (
    <>
      <Head>
        <title>Admin - User</title>
      </Head>
      <main className="bg-black flex justify-center">
        <div className="cont bg-black flex flex-col justify-center items-center mt-14 w-1/2">
          {/* User */}
          <div className="user bg-primary rounded-md h-auto  text-txt-gray px-14 py-8 w-full">
            <h2 className="text-white font-semibold text-2xl ">User</h2>
            <div className="text-8xl my-8">
              <FaRegUser />
            </div>
            {/* table */}
            <div className="table w-1/2 text-txt-gray">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-left text-sm font-light">
                        <tbody>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Name
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Mark</td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              E-mail
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              mark@gmail.com
                            </td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Orders
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Orders */}
          <div className="user bg-primary rounded-md h-auto text-txt-gray mt-10 w-full p-8">
            <h2 className="text-white font-semibold text-2xl">Orders</h2>
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
                              Car
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b even:bg-light-gray odd:bg-primary bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              1
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Mark</td>

                            <td class="whitespace-nowrap px-6 py-4">Toyota</td>
                            <td class="whitespace-nowrap px-8 py-4 text-[#FFC107]">
                              <div className="border-[1.5px] text-sm flex items-center justify-center text-center rounded-md border-[#FFC107] px-2 py-1">
                                pending
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <Link href="/orders/56">
                                <div className=" btn border-2 flex items-center justify-center text-center py-2 rounded-md text-light-green cursor-pointer border-light-green">
                                  View
                                </div>
                              </Link>
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
        </div>
      </main>
    </>
  );
}

export default UserDetail;
