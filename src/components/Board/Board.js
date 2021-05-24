import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSlots } from "../../actions";
import TimeRow from "../TimeRow/TimeRow";
import { INITIAL_SLOTS } from "../../actions/types";

const Board = () => {
  const dispatch = useDispatch();
  const slotsByRows = Object.values(INITIAL_SLOTS);

  useEffect(() => {
    dispatch(fetchSlots());
  }, [dispatch]);

  const rowsBoard = () => {
    const arrayOfRows = [];
    for (let index = 0; index < 8; index++) {
      arrayOfRows.push(
        <TimeRow slots={slotsByRows[index]} key={index} row={index} />
      );
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
