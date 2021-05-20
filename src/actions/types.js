/* Constants Types to reducers / actions */
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const FETCH_SLOTS = "FETCH_SLOTS";

/* Constants Initial States */
export const INITIAL_STATE = {
  isSignedIn: null,
  googleID: null,
};

export const INITIAL_SLOTS = {
  1: {
    first: {
      slotTime: "8:00 - 8:30",
      dealersBusy: 0,
    },
    second: {
      slotTime: "12:00 - 12:30",
      dealersBusy: 0,
    },
    third: {
      slotTime: "16:00 - 16:30",
      dealersBusy: 0,
    },
  },
  2: {
    first: {
      slotTime: "8:30 - 9:00",
      dealersBusy: 0,
    },
    second: {
      slotTime: "12:30 - 13:00",
      dealersBusy: 0,
    },
    third: {
      slotTime: "16:30 - 17:00",
      dealersBusy: 0,
    },
  },
  3: {
    first: {
      slotTime: "9:00 - 9:30",
      dealersBusy: 0,
    },
    second: {
      slotTime: "13:00 - 13:30",
      dealersBusy: 0,
    },
    third: {
      slotTime: "17:00 - 17:30",
      dealersBusy: 0,
    },
  },
  4: {
    first: {
      slotTime: "9:30 - 10:00",
      dealersBusy: 0,
    },
    second: {
      slotTime: "13:30 - 14:00",
      dealersBusy: 0,
    },
    third: {
      slotTime: "17:30 - 18:00",
      dealersBusy: 0,
    },
  },
  5: {
    first: {
      slotTime: "10:00 - 10:30",
      dealersBusy: 0,
    },
    second: {
      slotTime: "14:00 - 14:30",
      dealersBusy: 0,
    },
    third: {
      slotTime: "18:00 - 18:30",
      dealersBusy: 0,
    },
  },
  6: {
    first: {
      slotTime: "10:30 - 11:00",
      dealersBusy: 0,
    },
    second: {
      slotTime: "14:30 - 15:00",
      dealersBusy: 0,
    },
    third: {
      slotTime: "18:30 - 19:00",
      dealersBusy: 0,
    },
  },
  7: {
    first: {
      slotTime: "11:00 - 11:30",
      dealersBusy: 0,
    },
    second: {
      slotTime: "15:00 - 15:30",
      dealersBusy: 0,
    },
    third: {
      slotTime: "19:00 - 19:30",
      dealersBusy: 0,
    },
  },
  8: {
    first: {
      slotTime: "11:30 - 12:00",
      dealersBusy: 0,
    },
    second: {
      slotTime: "15:30 - 16:00",
      dealersBusy: 0,
    },
    third: {
      slotTime: "19:30 - 20:00",
      dealersBusy: 0,
    },
  },
};
