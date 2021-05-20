import { deliveries } from "../services/api";
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

/* export const saveTimeSlots = (completeBoard) => async (dispatch) => {
  const boardSlots = await deliveries.post("/slots", completeBoard);
  console.log(boardSlots);
}; */

export const fetchSlots = () => async () => {
  const allSlotsFromDB = await deliveries.get("/slots");

  return {
    type: FETCH_SLOTS,
    payload: allSlotsFromDB.data,
  };
};
