import React, { useCallback } from "react";
import useFadeInOnView from "@/hooks/useFadeInOnView";
import { GlobalContext } from "@/store/providers";
import ScrollToTop from "@/utils/ScrollToTop";

const BaseLayout = ({ children }) => {

	const scrollIcon = useFadeInOnView();

	const goToTop = useCallback(() => {
		scrollIcon.ref?.current?.scrollIntoView({ behavior: "smooth" });
	}, [scrollIcon]);

	return (
		<div id="layout">
			<div
				className="absolute h-screen invisible opacity-0 w-px"
				ref={scrollIcon.ref}
				style={{ visibility: "collapse", zIndex: -150 }}
			/>
			{children}
			<ScrollToTop onClick={goToTop} visible={scrollIcon.visible} />
		</div>
	);
};

export default BaseLayout;
