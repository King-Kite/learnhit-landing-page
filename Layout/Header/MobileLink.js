import React, { useState } from "react";
import Link from "next/link";

const linkStyle =
  "capitalize cursor-pointer p-2 pb-0 text-left text-sm sm:text-base md:text-lg tracking-widest hover:text-secondary-500";

const CustomLink = ({
  active,
  className,
  href,
  lastLink,
  handleClick,
  title,
}) => {
  const [width, setWidth] = useState(0);

  const len = title?.length * 7;

  return (
    <Link href={href}>
      <a>
        <li
          onMouseEnter={() => setWidth("66.66%")}
          onMouseLeave={() => setWidth("0")}
          className={`${
            active ? "text-secondary-500" : "text-gray-100"
          } ${linkStyle} ${className}`}
          onClick={handleClick}
        >
          {title}
        </li>
        <div
          className={`bg-secondary-500 duration-1000 ease-in-out ml-2 mb-2 transform transition-all ${
            lastLink && "mb-20"
          }`}
          style={{
            height: "2px",
            width: `${active ? "66.66%" : width}`,
            maxWidth: `${len}px`,
          }}
        />
      </a>
    </Link>
  );
};

export default CustomLink;
