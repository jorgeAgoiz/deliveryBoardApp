import React, { useState, useEffect } from "react";

const TimeSlot = ({ slot, column, row }) => {
  const { slotTime, dealersBusy } = slot;

  const onSelecSlot = () => {
    console.log(row, column);
  };

  return (
    <div
      onClick={onSelecSlot}
      className='column teal'
      style={{ marginLeft: "2px", marginRight: "2px" }}
    >
      <h3 className='ui'>{slotTime}</h3>
      <p>Dealers assigned: {dealersBusy}</p>
    </div>
  );
};

export default TimeSlot;

/* Ahora estaria bien hacer un modal de cada slot y poder individualizar mas el proceso 
de asignación de repartidores, y conectar todo eso con la store y la api */
