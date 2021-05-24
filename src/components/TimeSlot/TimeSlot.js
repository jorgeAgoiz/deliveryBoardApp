import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TimeSlot = ({ slot, column, row }) => {
  const { slotTime } = slot;
  const idSlot = `${column}${row}`;
  const idSlotParsed = parseInt(idSlot) + 1;

  const history = useHistory();
  const idStore = useSelector((state) => {
    const result = state.slots.filter((slot) => slot.id === idSlotParsed);
    return result[0];
  });

  const onSelecSlot = () => {
    history.push(`/toassign/${idSlotParsed}`);
  };

  return (
    <div
      onClick={onSelecSlot}
      className='column teal'
      style={{ marginLeft: "2px", marginRight: "2px" }}
    >
      <h3 className='ui'>{slotTime}</h3>
      <p>Dealers assigned: {idStore.dealersBusy}</p>
    </div>
  );
};

export default TimeSlot;
