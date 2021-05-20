import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  googleID: null,
};

export const signStateReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
      return { isSignedIn: true, googleID: payload.googleID };
    case SIGN_OUT:
      return { isSignedIn: false, googleID: null };
    default:
      return state;
  }
};
