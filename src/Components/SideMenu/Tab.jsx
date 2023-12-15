import classNames from "classnames";
import Link from "next/link";
import React from "react";

export default function Tab({ title, href, icon, isActive }) {
  return (
    <li>
      <Link
        href={href}
        className={classNames(
          "flex items-center py-2.5 text-[#797E9F] hover:bg-gray-700/10 group pl-5 font-normal",
          isActive &&
            "!text-[#004892] border-r-2 border-r-[#004892] !font-medium"
        )}
      >
        {icon}
        <span className="flex-1 ms-3 whitespace-nowrap">{title}</span>
      </Link>
    </li>
  );
}
