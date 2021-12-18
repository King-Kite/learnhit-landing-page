import React from "react";
import CustomLink from "./Link";

const listStyle = `flex items-center justify-between`;

const DesktopNavigation = ({ links }) => (
	<div className="hidden lg:block">
		<ul className={listStyle}>
			{links?.map((link) => (
				<CustomLink key={link.title} {...link} />
			))}
		</ul>
	</div>
);

export default DesktopNavigation;
