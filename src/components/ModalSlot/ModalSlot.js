import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const { outSideDiv, inSideDiv, actions, content, assign } = props;

  const modalWindow = () => {
    return (
      <div onClick={outSideDiv} className='ui dimmer modals visible active'>
        <div
          onClick={inSideDiv}
          className='ui standard tiny modal visible active'
        >
          <div className='header'>{content}</div>
          <div className='content'>{assign}</div>

          <div className='actions'>{actions}</div>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(modalWindow(), document.querySelector("#modal"));
};

export default Modal;
