import React from "react";

/* Creamos componente card y asi lo hacemos reutilizable, para los avatares hacemos llamada a api de avatares */
const Dealers = () => {
  return (
    <div className="ui three column grid">
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src="/images/avatar/large/daniel.jpg" alt="avatar" />
          </div>
          <div className="content">
            <a className="header">Daniel Louise</a>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src="/images/avatar/large/helen.jpg" alt="avatar" />
          </div>
          <div className="content">
            <a className="header">Helen Troy</a>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src="/images/avatar/large/elliot.jpg" alt="avatar" />
          </div>
          <div className="content">
            <a className="header">Elliot Fu</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dealers;
