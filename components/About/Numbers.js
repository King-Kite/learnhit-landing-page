import React, { useEffect, useState } from "react";
import useFadeInOnView from "../../hooks/useFadeInOnView";

const Count = ({ count, name }) => {
	const [value, setValue] = useState(0);

	const { ref, visible } = useFadeInOnView();

	useEffect(() => {
		let timeout;
		if (visible && value >= 0 && value < count) {
			timeout = setTimeout(() => {
				setValue(value + 1);
			}, (10 / count) * 10);
		}
		return () => clearTimeout(timeout);
	}, [count, value, visible]);

	return (
		<div ref={ref} className="bg-white m-2 p-3 shadow-lg text-center">
			<h1 className="font-semibold my-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-500">{value}</h1>
			<p className="capitalize font-semibold my-3 text-sm sm:text-base md:text-lg text-secondary-500 tracking-wide">
				{name}
			</p>
		</div>
	);
};

const Numbers = () => (
	<section className="container grid grid-cols-2 mx-auto my-2 py-3 rounded-md md:grid-cols-4">
		<Count count={1232} name="learners" />
		<Count count={102} name="courses" />
		<Count count={42} name="events" />
		<Count count={12} name="course creators" />
	</section>
);

export default Numbers;
