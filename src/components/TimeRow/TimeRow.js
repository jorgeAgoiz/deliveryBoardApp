import React from "react";
import TimeSlot from "../TimeSlot/TimeSlot";

const TimeRow = ({ slots, row }) => {
  const toEachSlot = Object.values(slots);

  const slotsRow = () => {
    const arrayOfSlots = [];
    for (let index = 0; index < 3; index++) {
      arrayOfSlots.push(
        <TimeSlot
          slot={toEachSlot[index]}
          key={index}
          row={row}
          column={index}
        />
      );
    }
    return arrayOfSlots;
  };

  return (
    <div className='row' style={{ margin: "3px" }}>
      {slotsRow()}
    </div>
  );
};

export default TimeRow;
