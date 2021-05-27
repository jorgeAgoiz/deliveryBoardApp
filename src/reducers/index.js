import {
  SIGN_IN,
  SIGN_OUT,
  INITIAL_STATE,
  FETCH_SLOTS,
  DEALERS_BY_SLOT,
  ASSIGN_DEALERS,
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

export const timeSlotsReducer = (state = DEALERS_BY_SLOT, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SLOTS:
      return state;
    case ASSIGN_DEALERS:
      const { id, dealers } = payload;
      return state.map(slot => {
        if (slot.id === id) {
          slot.dealersBusy = dealers;
        }
        return slot;
      })
    default:
      return state;
  }
};
