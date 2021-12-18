import React, { useCallback, useState } from "react";

const errorStyle = `
	font-semibold mb-3 text-red-500 text-sm
`;

const helpTextStyle = `
	 mb-3 px-2 text-gray-500 text-sm md:text-base
`;

const inputStyle = `
  form-input focus:shadow-outline outline-none px-3 py-2 rounded-sm text-sm sm:text-base text-gray-600 w-full
`;

const Input = ({
	backgroundColor,
	bordered,
	borderColor,
	capLabel,
	className,
	disabled,
	error,
	helpText,
	icon,
	iconType,
	label,
	name,
	type,
	...props
}) => {
	const getBorderColor = () =>
		error
			? "border-red-700 focus:border-primary-500"
			: disabled
			? "border-gray-100 focus:border-primary-500"
			: borderColor
			? borderColor
			: "border-primary-500 focus:border-secondary-500";

	const [borderColour, setBorderColour] = useState(
		"border-primary-500 focus:border-secondary-500"
	);

	const [_type, setType] = useState(type);

	const handlePassword = useCallback(() => {
		if (_type === "password") setType("text");
		else setType("password");
	}, [_type]);

	return (
		<>
			{label && (
				<label
					htmlFor={name}
					className={`${
						error
							? "font-semibold text-red-500"
							: "text-primary-500"
					} ${capLabel ? "capitalize" : ""} text-sm md:text-base ${
						bordered ? "my-1" : ""
					}`}
				>
					{label}
				</label>
			)}
			{type === "textarea" ? (
				<textarea
					className={`${inputStyle} ${
						disabled
							? "bg-gray-300"
							: backgroundColor || "bg-gray-100"
					} ${getBorderColor()} ${bordered ? "border" : "border-b-2"}
					${label && "my-1"} ${className}`}
					disabled={disabled}
					name={name}
					{...props}
				/>
			) : (
				<div
					className={
						icon &&
						`flex items-center ${
							bordered ? "border" : "border-b-2"
						} ${
							error || disabled ? getBorderColor() : borderColour
						}`
					}
				>
					{icon && (
						<span
							className={`
							${disabled ? "bg-gray-300" : backgroundColor || "bg-gray-100"} 
							font-semibold text-sm sm:text-base text-gray-400 px-3 py-2 outline-none 
							${bordered ? "border" : "border-b-2"}
							`}
						>
							<i className={`${iconType || "fas"} fa-${icon}`} />
						</span>
					)}
					<input
						onBlur={() => setBorderColour("border-primary-500")}
						onFocus={() => setBorderColour("border-secondary-500")}
						className={`${inputStyle} ${
							disabled
								? "bg-gray-300"
								: backgroundColor || "bg-gray-100"
						} ${!icon && getBorderColor()} ${
							bordered ? "border" : "border-b-2"
						}
						${label && !icon && "my-1"} ${className}`}
						disabled={disabled}
						name={name}
						type={type === "password" ? _type : type}
						{...props}
					/>
					{type === "password" && (
						<span
							onClick={handlePassword}
							className={`
							${
								disabled
									? "bg-gray-300"
									: (backgroundColor || "bg-gray-100") +
									  " hover:text-secondary-500"
							} 
							cursor-pointer font-semibold text-sm sm:text-base text-gray-400 px-3 py-2 outline-none 
							${bordered ? "border" : "border-b-2"}
							`}
						>
							<i
								className={`fas fa-${
									_type === "password" ? "eye" : "eye-slash"
								}`}
							/>
						</span>
					)}
				</div>
			)}
			{error && <span className={errorStyle}>{error}</span>}
			{helpText && <p className={helpTextStyle}>{helpText}</p>}
		</>
	);
};

Input.defaultProps = {
	capLabel: true
}

export default Input;
