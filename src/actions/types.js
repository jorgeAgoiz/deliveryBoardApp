/* Constants Types to reducers / actions */
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const FETCH_SLOTS = "FETCH_SLOTS";
export const ASSIGN_DEALERS = "ASSIGN_DEALERS";

/* Constants Initial States */
export const INITIAL_STATE = {
  isSignedIn: null,
  googleID: null,
};

export const INITIAL_SLOTS = {
  1: {
    first: {
      slotTime: "8:00 - 8:30",
    },
    second: {
      slotTime: "12:00 - 12:30",
    },
    third: {
      slotTime: "16:00 - 16:30",
    },
  },
  2: {
    first: {
      slotTime: "8:30 - 9:00",
    },
    second: {
      slotTime: "12:30 - 13:00",
    },
    third: {
      slotTime: "16:30 - 17:00",
    },
  },
  3: {
    first: {
      slotTime: "9:00 - 9:30",
    },
    second: {
      slotTime: "13:00 - 13:30",
    },
    third: {
      slotTime: "17:00 - 17:30",
    },
  },
  4: {
    first: {
      slotTime: "9:30 - 10:00",
    },
    second: {
      slotTime: "13:30 - 14:00",
    },
    third: {
      slotTime: "17:30 - 18:00",
    },
  },
  5: {
    first: {
      slotTime: "10:00 - 10:30",
    },
    second: {
      slotTime: "14:00 - 14:30",
    },
    third: {
      slotTime: "18:00 - 18:30",
    },
  },
  6: {
    first: {
      slotTime: "10:30 - 11:00",
    },
    second: {
      slotTime: "14:30 - 15:00",
    },
    third: {
      slotTime: "18:30 - 19:00",
    },
  },
  7: {
    first: {
      slotTime: "11:00 - 11:30",
    },
    second: {
      slotTime: "15:00 - 15:30",
    },
    third: {
      slotTime: "19:00 - 19:30",
    },
  },
  8: {
    first: {
      slotTime: "11:30 - 12:00",
    },
    second: {
      slotTime: "15:30 - 16:00",
    },
    third: {
      slotTime: "19:30 - 20:00",
    },
  },
};

export const DEALERS_BY_SLOT = [
  {
    id: 1,
    dealersBusy: 0,
  },
  {
    id: 11,
    dealersBusy: 0,
  },
  {
    id: 21,
    dealersBusy: 0,
  },
  {
    id: 2,
    dealersBusy: 0,
  },
  {
    id: 12,
    dealersBusy: 0,
  },
  {
    id: 22,
    dealersBusy: 0,
  },
  {
    id: 3,
    dealersBusy: 0,
  },
  {
    id: 13,
    dealersBusy: 0,
  },
  {
    id: 23,
    dealersBusy: 0,
  },
  {
    id: 4,
    dealersBusy: 0,
  },
  {
    id: 14,
    dealersBusy: 0,
  },
  {
    id: 24,
    dealersBusy: 0,
  },
  {
    id: 5,
    dealersBusy: 0,
  },
  {
    id: 15,
    dealersBusy: 0,
  },
  {
    id: 25,
    dealersBusy: 0,
  },
  {
    id: 6,
    dealersBusy: 0,
  },
  {
    id: 16,
    dealersBusy: 0,
  },
  {
    id: 26,
    dealersBusy: 0,
  },
  {
    id: 7,
    dealersBusy: 0,
  },
  {
    id: 17,
    dealersBusy: 0,
  },
  {
    id: 27,
    dealersBusy: 0,
  },
  {
    id: 8,
    dealersBusy: 0,
  },
  {
    id: 18,
    dealersBusy: 0,
  },
  {
    id: 28,
    dealersBusy: 0,
  },
];
