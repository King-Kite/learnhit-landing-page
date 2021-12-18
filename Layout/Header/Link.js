import React, { useState } from "react";
import Link from "next/link";

const activeLinkStyle = "text-primary-500 text-xl";
const inActiveLinkStyle = "text-gray-700 text-lg";
const linkStyle = "capitalize cursor-pointer font-semibold mx-4 text-center hover:text-primary-500 xl:px-4";

const CustomLink = ({ active, href, title }) => {
	const [width, setWidth] = useState(0);

	return (
		<li
			onMouseEnter={() => setWidth("66.66%")}
			onMouseLeave={() => setWidth("0")}
			className={`${linkStyle} ${active ? activeLinkStyle : inActiveLinkStyle}`}
		>
			<Link href={href}>{title}</Link>
			<div
				className="bg-secondary-500 duration-500 ease-in-out transform transition-all"
				style={{ height: "2px", width: `${active ? "66.66%" : width}` }}
			/>
		</li>
	);
};

export default CustomLink;
