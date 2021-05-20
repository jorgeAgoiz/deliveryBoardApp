import {
  SIGN_IN,
  SIGN_OUT,
  INITIAL_STATE,
  INITIAL_SLOTS,
  FETCH_SLOTS,
} from "../actions/types";

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

export const timeSlotsReducer = (state = INITIAL_SLOTS, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SLOTS:
      return { ...state };
    default:
      return state;
  }
};
