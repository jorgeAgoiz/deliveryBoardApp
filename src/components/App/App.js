import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Board from "../Board/Board";
import Header from "../Header/Header";
import Forbidden from "../Forbidden/Forbidden";
import FaqSection from "../FaqSection/FaqSection";
import Dealers from "../Dealers/Dealers";
import ToAssign from "../ToAssign/ToAssign";
import Footer from "../Footer/Footer";

const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const showMainContent = () => {
    return isSignedIn ? <Board /> : <Forbidden />;
  };

  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <div className='ui divider'></div>
        <Switch>
          <Route path='/' exact component={showMainContent} />
          <Route path='/faq' exact component={FaqSection} />
          <Route path='/dealers' exact component={Dealers} />
          <Route path='/toassign/:idslot' exact component={ToAssign} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

/* Ultimos avances:
  Hemos conseguido crear cada componente de slotTime.
  Tenemos estado inicial en la store.

  Siguiente Paso:
  Configurar el servidor para que guarde los datos.
  Incluir llamadas a API en reducers.
  Empezar a personalizar el estado del componente slot.
  --Mirar TimeSlot Component

*/
