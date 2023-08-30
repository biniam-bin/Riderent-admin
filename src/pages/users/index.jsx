import Layout from "@/components/Layout";
import React from "react";
import "../../app/globals.css";
import { BsFillTrashFill } from "react-icons/bs";
import Link from "next/link";

function users() {
  return (
    <>
      <Layout active="/users">
        <main>
          <main>
            <div className="bg-primary rounded-md m-6 p-8">
              <h2 className="text-white font-semibold text-2xl">User</h2>
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
                              <th scope="col" class="px-6 py-4">
                                Orders
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
                              <td class="whitespace-nowrap px-8 py-4 ">4</td>
                              <td class="whitespace-nowrap px-6 py-4">
                                <Link href="/users/56">
                                  <div className=" btn border-2 flex items-center justify-center text-center py-2 rounded-md text-light-green cursor-pointer border-light-green">
                                    Details
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
          </main>
        </main>
      </Layout>
    </>
  );
}

export default users;
