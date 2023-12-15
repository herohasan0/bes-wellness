import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between fixed w-full z-40 border-b-2 border-solid border-[#D1D5DB]/60 bg-white pr-10">
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
      <div className="w-12 h-12 bg-[#001248] rounded-full text-white flex items-center justify-center">
        E
      </div>
    </nav>
  );
}
