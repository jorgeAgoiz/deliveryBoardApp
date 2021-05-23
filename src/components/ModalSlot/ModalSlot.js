import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    const { outSideDiv, inSideDiv, actions, content, assign } = props;

    const modalWindow = () => {
        return (
            <div onClick={outSideDiv} className='ui dimmer modals visible active'>
                <div
                    onClick={inSideDiv}
                    className='ui standard modal visible active'
                >
                    <div className="ui centered padded grid">{content}</div>
                    <div class="ui divider"></div>
                    <div className="ui centered padded grid">{assign}</div>
                    <div class="ui divider"></div>
                    <div className="actions">{actions}</div>
                </div>
            </div>
        );
    }

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