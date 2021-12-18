import { useState } from "react";
import Alert from "@/components/common/Alert";

const useAlert = (onClose, message, type) => {
	const [_message, setMessage] = useState(message || null);
	const [_type, setType] = useState(type|| null);

	const handleClose = () => {
		onClose && onClose();
		setMessage(null)
	}

	return {
		Alert: (props) => _message ? <Alert message={_message} onClose={handleClose} type={_type} {...props} /> : <></>,
		setMessage,
		setType,
	}
}

export default useAlert;