import React from "react";

const containerStyle = `
	duration-200 flex justify-between items-center px-2 py-1 
	text-sm transition-all transform w-full
`;

const iconStyle = `
	cursor-pointer duration-1000 fas fa-times font-semibold mx-1 
	text-gray-100 text-sm transition-all transform hover:scale-110
`;

const messageStyle = "text-gray-100 mx-1";

const Alert = ({ cap, message, onClose, rounded, type }) => {
	const getColor = () => {
		switch (type) {
			case "danger":
				return "bg-red-500";
			case "info":
				return "bg-gray-500";
			case "pacify":
				return "bg-blue-500";
			case "primary":
				return "bg-primary-500";
			case "secondary":
				return "bg-secondary-500";
			case "success":
				return "bg-green-500";
			case "warning":
				return "bg-yellow-500";
			default:
				return "bg-gray-500";
		}
	};

	const getRounded = () => {
		switch (rounded) {
			case "xs":
				return "rounded";
			case "sm":
				return "rounded-sm";
			case "md":
				return "rounded-md";
			case "lg":
				return "rounded-lg";
			case "full":
				return "rounded-full";
			default:
				return "rounded-none";
		}
	};

	return (
		<div className={`${containerStyle} ${getColor()} ${getRounded()}`}>
			<p 
				className={`${cap ? "capitalize" : ""} ${messageStyle}`}
			>
				{message}
			</p>
			<i
				onClick={onClose}
				className={`${iconStyle} ${onClose ? "visible" : "invisible"}`}
			/>
		</div>
	);
};

export default Alert;
