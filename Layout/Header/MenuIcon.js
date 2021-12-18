import React, { forwardRef } from "react";

const containerStyle = "cursor-pointer h-6 ml-2 mr-4 sm:mx-6 pr-2 rounded-md transform w-6 hover:scale-105 md:order-2 lg:hidden";
const navIcon = "bg-primary-500 duration-300 m-1 px-3 rounded-lg transform transition-all w-full";

const Icon = forwardRef(({ visible, ...props }, ref) => (
	<section
		{...props}
		className={containerStyle}
		ref={ref}
	>
		<div
			className={`${navIcon} ${visible ? "rotate-45 translate-y-1" : ""}`}
			style={{ height: "2px" }}
		/>
		<div
			className={`${navIcon} ${visible ? "opacity-0 invisible" : ""}`}
			style={{ height: "2px" }}
		/>
		<div
			className={`${navIcon} ${visible ? "-rotate-45 -translate-y-2" : ""}`}
			style={{ height: "2px" }}
		/>
	</section>
));

Icon.displayName = "Icon";

export default Icon;