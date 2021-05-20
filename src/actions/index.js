import { FETCH_SLOTS, SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (googleID) => {
  return {
    type: SIGN_IN,
    payload: {
      googleID,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchSlots = () => {
  return {
    type: FETCH_SLOTS,
  };
};
