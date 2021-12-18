import React from "react";
import FadeInSection from "./FadeInSection";

const containerStyle = "px-2 py-4 md:m-2 lg:px-0";
const contentContainerStyle =
	"bg-white flex flex-col items-center my-4 rounded-sm shadow md:p-3 lg:flex-row-reverse lg:items-start lg:px-1";
const headerStyle =
	"font-semibold text-primary-500 text-2xl uppercase sm:mx-1 my-2";
const titleContainerStyle = "flex items-center mt-5 mb-3";
const titleStyle = "text-gray-400 text-sm tracking-wide uppercase mr-2";

const Container = ({
	className,
	titleClassName,
	children,
	lightTitle,
	title,
	...props
}) => (
	<FadeInSection
		className="container mx-auto overflow-hidden"
		duration={1000}
		persist
	>
		<section className={containerStyle}>
			{title && (
				<>
					<div className={titleContainerStyle}>
						<span className={titleStyle}>{lightTitle}</span>
						{lightTitle && (
							<div className="bg-secondary-500 w-32" style={{ height: "2px" }} />
						)}
					</div>
					<h1 className={headerStyle + " " + titleClassName}>{title}</h1>
				</>
			)}
			<div
				className={contentContainerStyle + " " + `${className || "py-4"}`}
				{...props}
			>
				{children}
			</div>
		</section>
	</FadeInSection>
);

export default Container;
