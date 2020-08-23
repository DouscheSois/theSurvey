import axios from "axios";
import { FORM_SUCCESS, FORM_FAILURE } from "./types";

export const createNewForm = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/form", formData, config);

    dispatch({
      type: FORM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => console.log("Error"));
    }
    dispatch({
      type: FORM_FAILURE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
