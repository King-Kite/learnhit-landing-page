import React from "react";
import Loader from "./Loader";

const buttonStyle = "duration-300 tracking-wide text-center text-gray-100 transition-all transform md:text-lg";

const Button = ({ background, caps, className, disabled, loading, loader, rounded, title, titleSize, ...props }) => {
	const getBackground = () => {
		switch (background) {
			case "danger":
				return "bg-red-600 hover:bg-red-500";
			case "info":
				return "bg-gray-600 hover:bg-gray-500";
			case "pacify":
				return "bg-blue-600 hover:bg-blue-500";
			case "primary":
				return "bg-primary-500 hover:bg-primary-400";
			case "secondary":
				return "bg-secondary-500 hover:bg-secondary-400";
			case "success":
				return "bg-green-600 hover:bg-green-500";
			case "warning":
				return "bg-yellow-600 hover:bg-yellow-500";
			default:
				return "bg-gray-600 hover:bg-gray-500";
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
		<button
			className={`${buttonStyle} ${titleSize || "text-sm md:text-base"} ${className || "px-5 py-2 md:py-3"} ${caps ? "uppercase" : "capitalize"} ${
				disabled ? "bg-gray-700" : getBackground()
			} ${disabled && "cursor-not-allowed"} ${getRounded()} ${loader && loading === true && "flex justify-center items-center"}`}
			disabled={disabled}
			{...props}
		>
			{title}
			{ loader && loading && 
				<Loader className="mx-4" type="dotted" width="sm" style={{ width: "1.3rem", height: "1.3rem"}} />
			}
		</button>
	);
};

export default Button;
