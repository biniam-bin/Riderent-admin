import React from "react";
import "../../app/globals.css";
import { FaRegUser } from "react-icons/fa";

function OrderDetail() {
  return (
    <main className="bg-black flex justify-center">
      <div className="cont bg-black flex flex-col justify-center items-center mt-14 w-1/2">
        {/* User */}
        <div className="user bg-primary rounded-md h-auto  text-txt-gray px-14 py-8 w-full">
          <h2 className="text-white font-semibold text-2xl ">Order</h2>
          {/* <div className="text-8xl my-8">
            <FaRegUser />
          </div> */}
          {/* table */}
          <div className="flex items-center flex-col mt-10">
            <div className="table w-1/2 text-txt-gray">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-left text-sm font-light">
                        <tbody>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              User
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Mark</td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Car
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              BMW
                            </td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Pick Up Location
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">NY</td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Drop Off Location
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">La</td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Pick Up Date
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">21/08/2023</td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Return Date
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">29/08/2023</td>
                          </tr>
                          <tr class="border-b bg-neutral-100">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              Status
                            </td>
                                                      <td class="whitespace-nowrap px-6 py-4">
                                                          <select className="bg-primary rounded-md" name="" id="">
                                                              <option value="">pending</option>
                                                              <option value="">rented</option>
                                                              <option value="">returned</option>
                                                          </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  <div className="btn mt-10 bg-light-green px-6 py-2 rounded-md text-white cursor-pointer">Update</div>
                  </div>
        </div>
        {/* Orders */}
      </div>
    </main>
  );
}

export default OrderDetail;
