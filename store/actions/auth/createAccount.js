import { NEXT_REGISTER_URL } from "../../../config";
import {
    AUTH_REGISTER_FAILED,
    AUTH_REGISTER_LOADING,
    AUTH_REGISTER_SUCCESS,
} from "../types";

const createAccount = ({
    first_name,
    last_name,
    middle_name,
    email,
    password1,
    password2,
}) => async (dispatch) => {
    dispatch({
        type: AUTH_REGISTER_LOADING,
    });

    const body = JSON.stringify({
        first_name,
        last_name,
        middle_name,
        email,
        password1,
        password2,
    });
    try {
        const response = await fetch(NEXT_REGISTER_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body,
        });

        const data = await response.json();

        if (response.status === 201) {
            dispatch({
                type: AUTH_REGISTER_SUCCESS,
                payload: data,
            });
        } else {
            dispatch({
                type: AUTH_REGISTER_FAILED,
                payload: data,
            });
        }
    } catch (error) {
        dispatch({
            type: AUTH_REGISTER_FAILED,
            payload:
                error?.message ||
                "an action went wrong when trying to create your account",
        });
    }
};

export default createAccount;
