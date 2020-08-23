import { FORM_SUCCESS, FORM_FAILURE } from "../action/types";

const initialState = {
  form: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FORM_SUCCESS:
      return {
        ...state,
        form: payload,
        loading: false,
      };
    case FORM_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
