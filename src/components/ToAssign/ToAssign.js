import React, { useState } from "react";
import Modal from "../ModalSlot/ModalSlot";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  assignDealers
} from "../../actions/index";

const ToAssign = (props) => {
  const idslot = parseInt(props.match.params.idslot);
  const slotSelected = useSelector((state) => {
    const result = state.slots.filter((slot) => {
      return slot.id === idslot;
    });
    return result[0];
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const [freeDealers, setFreeDealers] = useState(slotSelected.dealersBusy);

  const comeBackToBoard = () => history.push("/");
  const stopPropagation = (event) => event.stopPropagation();
  const mainContent = (
    <>
      <h3>Free Dealers: {8 - freeDealers}</h3>
    </>
  );

  const subtractDealers = () => {
    if (freeDealers > 0) {
      setFreeDealers(freeDealers - 1);
    } else {
      console.log("All dealers are free!!");
    }
  };

  const addDealers = () => {
    if (freeDealers < 8) {
      setFreeDealers(freeDealers + 1);
    } else {
      console.log("All dealers are busy!!!")
    }

  };

  const dispatchDealers = () => {
    const { id } = slotSelected;
    dispatch(assignDealers({ id, freeDealers }));
    history.push("/")
  }

  const assignButtons = (
    <div className='ui center aligned segment'>
      <button onClick={subtractDealers} className='ui orange button'>
        -
      </button>
      <div className='ui circular big grey label'>
        <i className='truck icon'></i>
        {freeDealers}
      </div>
      <button onClick={addDealers} className='ui green button'>
        +
      </button>
    </div>
  );

  const actionButtons = (
    <>
      <button className='ui red button' onClick={comeBackToBoard}>
        Cancel
      </button>
      <button className='ui primary button' onClick={dispatchDealers}>Save</button>
    </>
  );

  return (
    <div>
      <Modal
        assign={assignButtons}
        outSideDiv={comeBackToBoard}
        inSideDiv={stopPropagation}
        actions={actionButtons}
        content={mainContent}
      />
    </div>
  );
};

export default ToAssign;

