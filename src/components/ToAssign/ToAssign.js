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
        return arrayRowSelected[column].dealersBusy;
    })

    const comeBackToBoard = () => history.push("/");
    const stopPropagation = (event) => event.stopPropagation();
    const mainContent = (
        <>
            <h3>Free Dealers: {8 - freeDealers}</h3>
        </>
    );

    const assignButtons = (
        <div className="ui center aligned segment">
            <button className="ui orange button">-</button>
            <div className="ui circular big grey label">
                <i className="truck icon"></i>{freeDealers}
            </div>
            <button className="ui green button">+</button>
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