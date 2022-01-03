import React from "react";
import MicroSite from "./components/Microsite";
import {BrowserRouter, Route,Switch} from 'react-router-dom'


class App extends React.Component {
  render(){
  return (
   <BrowserRouter>
    <div className="App">
      <Route path="/phygitals/kit/">
        <MicroSite /> 
      </Route>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
