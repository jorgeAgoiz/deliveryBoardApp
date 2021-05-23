import React from "react";
import Modal from "../ModalSlot/ModalSlot";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ToAssign = (props) => {
    const { column, row } = props.match.params;
    const history = useHistory();
    const freeDealers = useSelector(state => {
        const rowSelected = Object.values(state.slots);
        const arrayRowSelected = Object.values(rowSelected[row]);
        return 8 - arrayRowSelected[column].dealersBusy;
    })

    const comeBackToBoard = () => history.push("/");
    const stopPropagation = (event) => event.stopPropagation();
    const mainContent = (
        <>
            <h3>Free Dealers: {freeDealers}</h3>
        </>
    );

    const assignButtons = (
        <div className="ui buttons">
            <button className="ui red button"> - </button>
            <div className="or" data-text="5"></div>
            <button className="ui positive button"> + </button>
        </div>
    )
    /* Continuaremos aqui dandole funcionalidad a estos botones */

    const actionButtons = (
        <>
            <button className="ui red button" onClick={comeBackToBoard}>Cancel</button>
            <button className="ui primary button" >Save</button>
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
    )
}

export default ToAssign;