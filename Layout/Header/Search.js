import React, { forwardRef, useState } from "react";

const containerStyle = "absolute bg-gray-200 top-16 md:top-20 z-50 duration-1000 transition-all transform mx-auto rounded-sm pb-2 py-1 sm:pb-0";
const hideStyle = "-translate-y-full h-0 invisible opacity-0";
const showStyle = "h-12 translate-y-0 visible opacity-100 sm:h-16";

const buttonStyle = "cursor-pointer hover:bg-gray-400 hover:text-gray-200 bg-gray-100 text-gray-700 flex justify-center rounded-full items-center text-sm md:text-base px-3 py-3 ml-2 mr-1 md:mx-3";
const formStyle = "flex justify-center items-center h-full px-1 sm:py-1 rounded-sm mx-auto";
const inputStyle = "bg-transparent focus:shadow-lg outline-none h-full rounded-sm px-2 sm:px-4 py-2 w-full text-gray-600 text-base md:text-lg";

const Search = forwardRef(({ visible }, ref) => {

	const [value, setValue] = useState("");

	return (
		<div 
			ref={ref}
			className={containerStyle + " " + (visible ? showStyle : hideStyle)}
			style={{ width: "100%" }}
		>
			<form 
				onSubmit={(e) => e.preventDefault()} className={formStyle}
				style={{ width: "92.5%" }}
			>
				<div className="border-b-2 border-primary-500 border-opacity-75 w-full">
					<input 
						className={inputStyle}
						name="search"
						onChange={(e) => setValue(e.target.value)}
						placeholder="Search Courses e.g Web development, Web Design..." 
						value={value}
					/>
				</div>
				<button className={buttonStyle}>
					<i className="fas fa-search" />
				</button>
			</form>
		</div>
	)
})

Search.diplayName = "Search";

export default Search;