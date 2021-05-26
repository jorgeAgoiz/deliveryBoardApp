import React from "react";

/* Creamos componente card y asi lo hacemos reutilizable, para los avatares hacemos llamada a api de avatares */
const Dealers = () => {
  return (
    <>
      <div className="ui centered huge header">Team of Dealers</div>
      <div className="ui clearing divider"></div>
      <div className="ui four column grid">
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Daniel Louise</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Mat Giampietro</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Elliot Fu</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtcl-1iO_yF8nszUob_EssatZo8c_aZbuwiH_IxKpHXL3iUI03IRkfkUfX0GPwpzsHg&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Daniel Louise</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcaUhNQfR1D2a7vObjklLD_5unG8POsCzkcUqrLXn4ivlOczXqHU7X4-dSlTT-_EK4wY&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Michael Cooper</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRraevvHdWCh-jeY7arPOi3Mxg0QLiJMmRtjCuqsd_dZ_Gaz1fU1oGwKaPr2tqvIzRcOC8&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Leroy Jenkins</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTea6mpJZODj13Lvutndl6PgvULvVC3tPcreM4doidd7vHImnTOeK0HkfZIrFGeHuN_aJc&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Helen Troy</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8RtAAboaHS1D8T85uPmK0MEwLCDXr2j22kTuOLEkVfbIdTxiHaeyAfYJrijWmvgpJuU&usqp=CAU" alt="avatar" />
            </div>
            <div className="content">
              <a className="header">Jenny Heis</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dealers;
