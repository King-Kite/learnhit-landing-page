import React from "react";

const indicatorStyle =
	"bottom-12 flex justify-center items-center relative sm:bottom-16 lg:bottom-12";

const getIndicators = (number) => {
	const arrList = [];

	for (let i = 0; i < number; i++) {
		arrList.push(i)
	}

	return arrList;
}

const Indicators = ({ currentIndex, length, goToSlide }) => (
	<div className={indicatorStyle}>
		{getIndicators(length)?.map((image, index) => (
			<div
				onClick={() => goToSlide(index)}
				key={image}
				className={`
					cursor-pointer h-4 mx-2 rounded-full w-4 hover:bg-blue-400 ${
						currentIndex === index ? "bg-gray-100" : "bg-gray-400"
					}
				`}
			/>
		))}
	</div>
)

export default Indicators