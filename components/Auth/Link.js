import React, { useState } from "react";
import Link from "next/link";

const underlineStyle = "bg-secondary-500 mb-1 duration-500 ease-in-out transform transition-all";

const CustomLink = ({ href, name, title }) => {
	const [width, setWidth] = useState(0);

	return (
		<>
			<span className="capitalize text-xs sm:text-sm text-gray-500 md:text-base">{title}</span>
			<Link href={href}>
				<a 
					onMouseEnter={() => setWidth("66.66%")}
					onMouseLeave={() => setWidth("0")}
					className="capitalize cursor-pointer mx-2 text-lg text-primary-500 hover:text-primary-300"
				>
					<div className="inline-block">
						<span className="text-sm tracking-wide md:text-base">{name}</span>
						<div
							style={{ width: `${width}`, height: "2px", maxWidth: `${name.length * 7}px` }}
							className={underlineStyle}
						/>
					</div>
				</a>
			</Link>
		</>
	);
};

export default CustomLink;
