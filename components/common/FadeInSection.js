import React from "react";
import useFadeInOnView from "../../hooks/useFadeInOnView";

const FadeInSection = ({ children, className, duration, persist }) => {
	const { ref, visible } = useFadeInOnView(persist);
	const style = `duration-${duration || 500} transform transition-all`;

	return (
		<div
			ref={ref}
			className={`${style} ${
				visible
					? "translate-y-0 opacity-100"
					: "translate-y-32 opacity-0"
			} ${className}`}
		>
			{children}
		</div>
	);
};

export default FadeInSection;
