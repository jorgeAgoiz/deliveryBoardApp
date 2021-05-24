import { deliveries } from "../services/api";
import { FETCH_SLOTS, SIGN_IN, SIGN_OUT, ADD_DEALERS } from "./types";

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

export const addDealersAssigned = ({ id }) => {
  return {
    type: ADD_DEALERS,
    payload: {
      id,
    },
  };
};

export const subtractDealersAssigned = ({ id }) => {
  return {
    type: ADD_DEALERS,
    payload: {
      id,
    },
  };
};
