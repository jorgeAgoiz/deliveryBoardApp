import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {

    console.log("Modal Loaded")

    const modalWindow = () => {
        return (
            <div className='ui dimmer modals visible active'>
                <div
                    className='ui standard modal visible active'
                >
                    <h1>Modal Window</h1>
                </div>
            </div>
        );
    }

    const stopPropagation = (event) => event.stopPropagation();

    return ReactDOM.createPortal(
        modalWindow(),
        document.querySelector("#modal")
    );
};

export default Modal;

/* Modal empezada, necesitamos añadir los estilos y los
eventos */