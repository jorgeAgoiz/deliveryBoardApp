import React from "react";
import Modal from "../ModalSlot/ModalSlot";

const ToAssign = (props) => {
    const { column, row } = props.match.params;



    return (
        <div>
            <Modal />
        </div>
    )
}

export default ToAssign;