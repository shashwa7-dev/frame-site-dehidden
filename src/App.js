import React from "react";
import MicroSite from "./components/Microsite";

function Loader(){
  return(
    <div className="preloader"></div>
  )
}

class App extends React.Component {

  componentDidMount(){
    document.querySelector('.preloader').style.display = 'none'
  }
  render(){
  return (
    <div className="App">
      <Loader />
      <MicroSite/>
    </div>
  );
  }
}

export default App;
