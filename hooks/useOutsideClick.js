import React, { useEffect, useRef, useState } from "react";

const useOutsideClick = () => {
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);
	const buttonRef = useRef(null);
	const eventType = "click";

	const handleMouseClick = ({ target }) => {
		!buttonRef?.current?.contains(target) && !ref?.current?.contains(target) && setVisible(false);
	};

	const handleKeyPress = (event) => {
		event.key === "Escape" && setVisible(false);
	};

	useEffect(() => {
		document.addEventListener(eventType, handleMouseClick, true);
		document.addEventListener(eventType, handleKeyPress, true);

		return () => {
			document.removeEventListener(eventType, handleMouseClick, true);
			document.removeEventListener(eventType, handleKeyPress, true);
		};
	}, []);

	return {
		buttonRef,
		ref,
		setVisible,
		visible,
	};
};

export default useOutsideClick;
