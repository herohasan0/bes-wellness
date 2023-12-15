import Image from "next/image";
import Link from "next/link";
import React from "react";
import Person from "./Icons/Person";
import Report from "./Icons/Report";
import Dashboard from "./Icons/Dashboard";
import Message from "./Icons/Message";
import Tab from "./SideMenu/Tab";
import { useRouter } from "next/router";

const LINKS = [
  {
    id: 0,
    title: "Kisisel",
    icon: <Person />,
    href: "/",
  },
  {
    id: 1,
    title: "Tahlillerim",
    icon: <Report />,
    href: "/analysis",
  },
  {
    id: 2,
    title: "Radyolojk Görüntülerim",
    icon: <Dashboard />,
    href: "/radiology",
  },
  {
    id: 3,
    title: "AI Therapist",
    icon: <Message />,
    href: "/ai-asistant",
  },
];

export default function PageLayout({ children }) {
  const { pathname } = useRouter();

  console.log("pathname", pathname);

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
            {LINKS.map((link) => (
              <Tab
                key={link.id}
                title={link.title}
                href={link.href}
                icon={link.icon}
                isActive={pathname === link.href}
              />
            ))}
          </ul>
        </div>
      </aside>
      <div className="ml-64 pt-32 px-10 bg-[#f8f8fad9] min-h-screen">
        {children}
      </div>
    </>
  );
}
