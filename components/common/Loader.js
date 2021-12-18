import React from "react";

const containerStyle = "flex justify-center rounded-full items-center";

const loaderStyle = "border-t-0 border-b-0 rounded-full";

const Loader = ({
	animate,
	background,
	className,
	color,
	size,
	type,
	width,
	style,
	...props
}) => {
	const getAnimationType = () => {
		switch (animate) {
			case "bounce":
				return "animate-bounce";
			case "pulse":
				return "animate-pulse";
			case "spin":
				return "animate-spin";
			default:
				return "animate-spin";
		}
	};

	const getBackground = () => {
		switch (background) {
			case "danger":
				return "bg-red-600";
			case "info":
				return "bg-gray-600";
			case "pacify":
				return "bg-blue-600";
			case "primary":
				return "bg-primary-500";
			case "secondary":
				return "bg-secondary-500";
			case "success":
				return "bg-green-600";
			case "white":
				return "bg-white";
			case "warning":
				return "bg-yellow-600";
			default:
				return "bg-transparent";
		}
	};

	const getColor = () => {
		switch (color) {
			case "danger":
				return "border-red-600";
			case "info":
				return "border-gray-600";
			case "pacify":
				return "border-blue-500";
			case "primary":
				return "border-primary-500";
			case "secondary":
				return "border-secondary-500";
			case "success":
				return "border-green-600";
			case "warning":
				return "border-yellow-600";
			case "white":
				return "border-white";
			default:
				return "border-gray-100";
		}
	};

	const getType = () => {
		switch (type) {
			case "dashed":
				return "border-dashed";
			case "dotted":
				return "border-dotted";
			case "double":
				return "border-double";
			case "solid":
				return "border-solid";
			default:
				return "border-solid";
		}
	};

	const getWidth = () => {
		switch (width) {
			case "xs":
				return "border";
			case "sm":
				return "border-2";
			case "md":
				return "border-4";
			case "lg":
				return "border-8";
			default:
				return "border-2";
		}
	};

	const styleLoader = {
		height: `${size * 0.25}rem` || "2rem",
		width: `${size * 0.25}rem` || "2rem",
		...style,
	};

	return (
		<div className={containerStyle + " " + className}>
			<div
				className={`${loaderStyle} ${getAnimationType()} ${getBackground()} ${getColor()} ${getType()} ${getWidth()}`}
				style={styleLoader}
				{...props}
			/>
		</div>
	);
};

export default Loader;