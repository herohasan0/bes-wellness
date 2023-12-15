import Link from "next/link";
import React from "react";
import Person from "../Icons/Person";

export default function Tab({ title, href }) {
  return (
    <li>
      <Link
        href="/"
        className="flex items-center py-2.5 text-[#797E9F] hover:text-white hover:bg-gray-700 group pl-5 "
      >
        <Person />

        <span className="flex-1 ms-3 whitespace-nowrap">Kisisel</span>
      </Link>
    </li>
  );
}
