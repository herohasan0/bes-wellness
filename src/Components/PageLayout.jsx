import Image from "next/image";
import Link from "next/link";
import React from "react";
import Person from "./Icons/Person";
import Report from "./Icons/Report";
import Dashboard from "./Icons/Dashboard";
import Message from "./Icons/Message";

export default function PageLayout({ children }) {
  return (
    <>
      <nav className="fixed w-full z-40 border-b-2 border-solid border-[#D1D5DB]/60 bg-white">
        <ul className="flex flex-col font-medium">
          <li className="py-7">
            <Link href="#" className="block text-white" aria-current="page">
              <div className="relative w-64 h-10 ml-12">
                <Image
                  src="https://saglik.anadolusigorta.com.tr/static/media/logo-new.0c5531b6.svg"
                  fill
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 w-64 h-screen shadow-xl"
        aria-label="Sidebar"
      >
        <div className="h-full pt-5 overflow-y-auto border-b-2 border-solid border-[#D1D5DB]/60 bg-white">
          <ul className="space-y-2 font-medium pt-24">
            <li>
              <Link
                href="/"
                className="flex items-center py-2.5 text-[#797E9F] hover:text-white hover:bg-gray-700 group pl-5 "
              >
                <Person />
                <span className="flex-1 ms-3 whitespace-nowrap">Kisisel</span>
              </Link>
            </li>
            <li>
              <Link
                href="/analysis"
                className="flex items-center py-2.5 text-[#797E9F] hover:text-white hover:bg-gray-700 group pl-5 "
              >
                <Report />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Tahlillerim
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/radiology"
                className="flex items-center py-2.5 text-[#797E9F] hover:text-white  hover:bg-gray-700 group pl-5"
              >
                <Dashboard />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Radyolojk Görüntülerim
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/ai-asistant"
                className="flex items-center py-2.5 text-[#797E9F] hover:text-white  hover:bg-gray-700 group pl-5"
              >
                <Message />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  AI Therapist
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="ml-64 pt-32 px-10 bg-[#f8f8fad9] min-h-screen">
        {children}
      </div>
    </>
  );
}
