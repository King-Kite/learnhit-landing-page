import { NEXT_EMAIL_RECONFIRMATION_URL } from "../../../config";
import {
  EMAIL_CONFIRMATION_FAILED,
  EMAIL_CONFIRMATION_LOADING,
  EMAIL_CONFIRMATION_SUCCESS
} from "../types";

const confirmEmail = ({ email }) => async (dispatch) => {
    dispatch({
      type: EMAIL_CONFIRMATION_LOADING,
    });

    const body = JSON.stringify({ email });

    try {
      const response = await fetch(NEXT_EMAIL_RECONFIRMATION_URL, {
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
          type: EMAIL_CONFIRMATION_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: EMAIL_CONFIRMATION_FAILED,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: EMAIL_CONFIRMATION_FAILED,
        payload: error.response ? error.response.data : "something went wrong",
      });
    }
  };

export default confirmEmail;
