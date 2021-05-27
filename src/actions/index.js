import { FETCH_SLOTS, SIGN_IN, SIGN_OUT, ASSIGN_DEALERS } from "./types";

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

export const fetchSlots = () => async () => {
  return {
    type: FETCH_SLOTS,
  };
};

export const assignDealers = ({ id, freeDealers }) => {
  return {
    type: ASSIGN_DEALERS,
    payload: {
      id,
      dealers: freeDealers
    },
  };
};
