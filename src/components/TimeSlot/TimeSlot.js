import React, { useState, useEffect } from "react";

const TimeSlot = ({ slot }) => {
  const { slotTime, dealersBusy } = slot;
  return (
    <div
      className='column teal'
      style={{ marginLeft: "2px", marginRight: "2px" }}
    >
      <h3 className='ui'>{slotTime}</h3>
      <p>Dealers assigned: {dealersBusy}</p>
    </div>
  );
};

export default TimeSlot;
