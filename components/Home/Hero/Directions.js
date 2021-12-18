import React from "react";

const containerStyle =
	"absolute cursor-pointer flex justify-center items-center h-20 mt-8 py-2 top-1/2 w-10 hover:bg-gray-500";
const iconStyle = "mx-2 text-4xl text-gray-100";

const Directions = ({ onPrevious, onNext }) => (
	<>
		<div
			onClick={onPrevious}
			className={containerStyle + " justify-start left-0 opacity-75"}
		>
			<i className={iconStyle + " fas fa-chevron-left"} />
		</div>

		<div
			onClick={onNext}
			className={containerStyle + " justify-end opacity-75 right-0"}
		>
			<i className={iconStyle + " fas fa-chevron-right"} />
		</div>
	</>
);

export default Directions;
