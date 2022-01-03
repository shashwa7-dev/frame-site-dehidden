import React from "react";
import MicroSite from "./components/Microsite";
import {HashRouter, Route} from 'react-router-dom'


class App extends React.Component {
  render(){
  return (
   <HashRouter>
    <div className="App">
      <Route path="/phygitals/kit/">
        <MicroSite /> 
      </Route>
    </div>
    </HashRouter>
  );
  }
}

export default App;
