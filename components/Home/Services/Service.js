import React, { useState } from "react";

const Service = ({ content, icon, title }) => {
	const [color, setColor] = useState("primary-500");

	return (
		<div 
			onMouseEnter={() => setColor("secondary-500")}
			onMouseLeave={() => setColor("primary-500")}
			className="bg-white p-6 rounded-lg text-center"
		>
			<div className={`bg-gray-200 inline-flex items-center justify-center my-2 p-5 rounded-full text-2xl md:text-3xl text-${color}`}>
				<i className={`fas fa-${icon}`} />
			</div>
			<h3 className="capitalize font-semibold max-w-lg my-3 text-gray-500 text-base md:text-lg">{title}</h3>
			{content && <p className="max-w-lg my-3 text-sm text-center text-gray-600 md:text-base">{content}</p>}
		</div>
	)
}

export default Service;