import React from "react";
import MicroSite from "./components/Microsite";
import {BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {
  render(){
  return (
   <BrowserRouter forceRefresh={true}>
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
