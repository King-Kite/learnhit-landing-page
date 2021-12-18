import {
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_DELETE_ACCOUNT_FAILED,
  AUTH_DELETE_ACCOUNT_LOADING,
  AUTH_DELETE_ACCOUNT_SUCCESS,
  AUTH_LOGOUT_FAILED,
  AUTH_LOGOUT_LOADING,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REDIRECT_START,
  AUTH_REDIRECT_STOP,
} from "../../actions/types";

export const initialState = {
  data: null,
  error: null,
  isAuthenticated: false,
  loading: false,
  redirect: false,
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case AUTH_FAILED:
      return {
        ...state,
        data: null,
        error: payload,
        isAuthenticated: false,
        loading: false,
      };
    case AUTH_LOADING:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_DELETE_ACCOUNT_FAILED:
      return {
        ...state,
        data: null,
        error: payload,
        loading: false
      };
    case AUTH_DELETE_ACCOUNT_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case AUTH_DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        isAuthenticated: false,
        loading: false,
      };
    case AUTH_LOGOUT_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case AUTH_LOGOUT_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
        isAuthenticated: false,
        loading: false,
      };
    case AUTH_REDIRECT_START:
      return {
        ...initialState,
        redirect: true
      }
    case AUTH_REDIRECT_STOP:
      return {
        ...state,
        redirect: false
      }
    default:
      return state;
  }
};

export default reducer;
