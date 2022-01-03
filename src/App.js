import React from "react";
import MicroSite from "./components/Microsite";

function Loader(){
  return(
    <div className="preloader"></div>
  )
}

function handlePreLoad(){
  const loader = document.querySelector('.preloader')
  window.addEventListener('load',() => loader.style.display = 'none')
}
class App extends React.Component {

  componentDidMount(){
    handlePreLoad() //disables loader once site completely loaded
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
