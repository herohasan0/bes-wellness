import React from "react";
import Tab from "./Tab";
import Person from "../Icons/Person";
import Report from "../Icons/Report";
import Dashboard from "../Icons/Dashboard";
import Message from "../Icons/Message";
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

export default function SideMenu() {
  const { pathname } = useRouter();

  console.log("pathname", pathname);

  return (
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
  );
}
