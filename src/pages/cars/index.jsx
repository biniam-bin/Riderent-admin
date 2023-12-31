import Layout from "@/components/Layout";
import React from "react";
import "../../app/globals.css";
import Link from "next/link";
import Head from "next/head";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";


function cars() {
  return (
    <>
      <Head>
        <title>Admin - Cars</title>
      </Head>
      <Layout active="/cars">
        <main>
          <div className="flex rounded-md mt-6 p-8 justify-end">
            <Link href="/cars/add">
              <div className="btn text-white bg-light-green px-5 py-1 flex items-center cursor-pointer">
                <IoMdAdd />
                Add New
              </div>
            </Link>
          </div>
          <div className="bg-primary rounded-md mx-6 p-8">
            <h2 className="text-white font-semibold text-2xl">Cars</h2>
            <div className="table w-full text-txt-gray">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b bg-primary text-txt-gray font-medium dark:border-neutral-500 dark:bg-neutral-600">
                          <tr>
                            <th scope="col" class="px-6 py-4">
                              Id
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Image
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Name
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Rate
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
                            <td class="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/banner3.jpg"
                                width="100"
                                height={100}
                                className="rounded-md"
                              />
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Nissan</td>
                            <td class="whitespace-nowrap px-6 py-4">$245</td>
                            <td class="whitespace-nowrap px-8 py-4 ">2</td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <Link href="/cars/56">
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
      </Layout>
    </>
  );
}

export default cars;
