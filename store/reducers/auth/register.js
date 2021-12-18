import {
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER_LOADING,
  AUTH_REGISTER_RESET,
  AUTH_REGISTER_SUCCESS,
} from "../../actions/types";

export const initialState = {
  data: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case AUTH_REGISTER_FAILED:
      return {
        ...state,
        data: null,
        error: payload,
        loading: false,
      };
    case AUTH_REGISTER_LOADING:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case AUTH_REGISTER_RESET:
      return {
        ...initialState,
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
