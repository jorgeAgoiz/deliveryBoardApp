import React from "react";
import { useSelector } from "react-redux";
import TimeRow from "../TimeRow/TimeRow";

const Board = () => {
  const slotsByRows = useSelector((state) => Object.values(state.slots));

  const rowsBoard = () => {
    const arrayOfRows = [];
    for (let index = 0; index < 8; index++) {
      arrayOfRows.push(<TimeRow slots={slotsByRows[index]} key={index} />);
    }
    return arrayOfRows;
  };

  return (
    <div className='ui equal width padded grid center aligned grid'>
      {rowsBoard()}
    </div>
  );
};

export default Board;
