import React from "react";
import Board from "../Board/Board";
import Header from "../Header/Header";

const App = () => {
  return (
    <div className='ui container'>
      <Header />
      <div className='ui divider'></div>
      <Board />
    </div>
  );
};

export default App;

/* Siguiente Paso:
  Configurar la store de redux y terminar el Logeo.
*/
