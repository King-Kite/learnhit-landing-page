import { NEXT_SOCIAL_GOOGLE_LOGIN_URL } from "../../../config";
import {
    AUTH_REGISTER_LOADING,
    AUTH_REGISTER_FAILED,
    AUTH_REGISTER_SUCCESS,
} from "../types";

const loginSocialAccount = ({ accessToken, platform, tokenId, onSuccess }) => async (
    dispatch
) => {
    dispatch({
        type: AUTH_REGISTER_LOADING,
    });

    const body = JSON.stringify({ accessToken, tokenId });

    const url = platform === "google" ? 
        NEXT_SOCIAL_GOOGLE_LOGIN_URL : 
        NEXT_SOCIAL_GOOGLE_LOGIN_URL

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body,
        });

        const data = await response.json();

        if (response.status === 200) {
            dispatch({
                type: AUTH_REGISTER_SUCCESS,
                payload: data,
            });
            if (onSuccess && onSuccess !== undefined) onSuccess(data?.success || "Signed Up Successfully")
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
                `an action went wrong when trying to login to ${platform} account`,
        });
    }
};

export default loginSocialAccount;
