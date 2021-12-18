import React from "react";

const containerStyle = `
	bg-blue-100 divide-y divide-blue-900 divide-opacity-25
	flex flex-col justify-center py-2 text-primary-500 tracking-widest w-full
`;

const learnhitStyle = "font-semibold italic text-primary-500 text-base md:text-lg lg:text-xl ml-1";

const linkStyle = `
	border-b-2 border-secondary-500 border-opacity-0 cursor-pointer duration-300
	font-semibold hover:border-opacity-100 hover:scale-110 italic 
	text-base text-secondary-500 transform transition-all
`;

const Credits = () => (
	<section className={containerStyle}>
		<div className="text-center tracking-wide py-2">
			<p className="text-sm md:text-base">
				&copy; Copyright <span className={learnhitStyle}>LearnHit.</span> All Rights Reserved
			</p>
		</div>
		<div className="text-center text-sm tracking-tighter py-2 sm:text-base">
			<p>
				Designed and Developed by{" "}
				<a href="#" className={linkStyle}>
					King-Kite
				</a>
			</p>
		</div>
	</section>
);

export default Credits;
