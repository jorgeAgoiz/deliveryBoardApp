import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    const { outSideDiv } = props;

    const modalWindow = () => {
        return (
            <div onClick={outSideDiv} className='ui dimmer modals visible active'>
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
eventos .

Ultimo añadido funcion para volver a la lista al pinchar fuera
del modal*/