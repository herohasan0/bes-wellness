import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PageLayout({ children }) {
  return (
    <>
      <nav className="fixed w-full z-40 border-b-2 border-solid border-[#D1D5DB]/60 bg-white">
        <ul className="flex flex-col font-medium">
          <li className="py-7">
            <Link
              href="#"
              className="block rounded text-white"
              aria-current="page"
            >
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
        <div className="h-full pl-5 pt-5 overflow-y-auto border-b-2 border-solid border-[#D1D5DB]/60 bg-white">
          <ul className="space-y-2 font-medium pt-24">
            <li>
              <Link
                href="/analysis"
                className="flex items-center py-2.5 rounded-lg text-[#797E9F] hover:text-white hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Tahlillerim
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/radiology"
                className="flex items-center py-2.5 rounded-lg text-[#797E9F] hover:text-white  hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Radyolojk Görüntülerim
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/ai-asistant"
                className="flex items-center py-2.5 rounded-lg text-[#797E9F] hover:text-white  hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  AI Therapist
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="ml-64 pt-24 px-10 bg-[#f8f8fad9] min-h-screen">
        {children}
      </div>
    </>
  );
}
