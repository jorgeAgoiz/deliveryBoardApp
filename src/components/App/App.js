import React from "react";
import { useSelector } from "react-redux";
import Board from "../Board/Board";
import Header from "../Header/Header";
import Forbidden from "../Forbidden/Forbidden";

const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const showMainContent = () => {
    return isSignedIn ? <Board /> : <Forbidden />;
  };

  return (
    <div className='ui container'>
      <Header />
      <div className='ui divider'></div>
      {showMainContent()}
    </div>
  );
};

export default App;

/* Siguiente Paso:
  Ajustar visualizaciones con y sin loggeo.
  Convertir en componente cada div de franja horaria.
*/
