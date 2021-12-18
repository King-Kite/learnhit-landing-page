import {
	EMAIL_CONFIRMATION_DONE,
	EMAIL_CONFIRMATION_FAILED,
	EMAIL_CONFIRMATION_LOADING,
	EMAIL_CONFIRMATION_SUCCESS
} from "../../actions/types";

export const initialState = {
	data: null,
	error: null,
	loading: false,
}

const reducer = (state=initialState, { type, payload }) => {
	switch(type) {
		case EMAIL_CONFIRMATION_DONE:
			return {
				...initialState
			};
		case EMAIL_CONFIRMATION_FAILED:
			return {
				...state,
				data: null,
				error: payload,
				loading: false
			}
		case EMAIL_CONFIRMATION_LOADING:
			return {
				...state,
				error: null,
				loading: true
			}
		case EMAIL_CONFIRMATION_SUCCESS:
			return {
				...state,
				data: payload,
				error: null,
				loading: false
			}
		default:
			return state;
	}
}

export default reducer;