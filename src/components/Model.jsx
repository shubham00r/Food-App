import React, { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import Login from "./Login";
const Model = ({ open, setOpen, show, setshow }) => {
  // const [show, setShow] = useState(false);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            ya
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-end justify-center p-4 mins-h-full sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="w-full transition-all transform bg-white rounded-lg shadow-xl md:my-8 md:max-w-xl">
                  <div className="relative  w-full h-[full] ">
                    <div>
                      <Login show={show} setshow={setshow} />
                    </div>
                    {/* <h1 className="text-lg font-medium text-slate-50">
                      Select Your Product
                    </h1>
                    <div
                      onClick={() => setOpen(false)}
                      className="absolute cursor-pointer right-4 top-4 "
                    >
                      <AiOutlineClose className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      {" "}
                      <div>
                        <div className="container mx-auto">
                          <h1 className="mt-5 text-xl font-bold underline">
                            Refund policy:
                          </h1>
                          <p className="mt-2 text-base font-normal">
                            Online Laundry Wala is not responsible if clothes
                            are given to the pickup agent without generating the
                            booking online/whatsapp support. <br />
                            <br /> Online Laundry Wala is not responsible for
                            fastness of colour or shrinkage of garments & does
                            not guarantee 100% removal of stains <br /> <br />{" "}
                            Any issue with garments/delivery shall be reported
                            immediately during delivery to Online Laundry Wala
                            support team. <br /> <br /> 10 times of the washing
                            rate will be given for particular articles
                            lost/damaged if claimed within 24 hours of delivery.
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Model;
