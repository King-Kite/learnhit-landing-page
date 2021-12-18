import React, { useState } from "react";
import Link from "next/link";

const linkStyle =
  "cursor-pointer hover:text-base hover:text-secondary-500 mt-1 text-sm md:text-base";
const linkTitleStyle = "duration-200 transform transition-all";
const underlineStyle =
  "bg-gray-200 duration-500 ease-in-out mb-1 transform transition-all";

const CustomLink = ({ caps, href, title }) => {
  const [width, setWidth] = useState(0);

  const len = title?.length * 5;

  return (
    <Link href={href}>
      <a>
        <li
          onMouseEnter={() => setWidth("33.33%")}
          onMouseLeave={() => setWidth("0")}
          className={linkStyle + " " + (caps ? "" : "capitalize")}
        >
          <span className={linkTitleStyle}>{title}</span>
        </li>
        <div
          style={{ width: `${width}`, height: "2px", maxWidth: `${len}px` }}
          className={underlineStyle}
        />
      </a>
    </Link>
  );
};

export default CustomLink;
