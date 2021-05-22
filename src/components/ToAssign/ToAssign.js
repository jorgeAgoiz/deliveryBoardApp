import React from "react";
import Modal from "../ModalSlot/ModalSlot";
import { useHistory } from "react-router-dom";

const ToAssign = (props) => {
    const { column, row } = props.match.params;
    const history = useHistory();

    const comeBackToBoard = () => history.push("/");


    return (
        <div>
            <Modal
                outSideDiv={comeBackToBoard} />
        </div>
    )
}

export default ToAssign;