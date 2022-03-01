import React from "react";
import Sidebar from "./Sidebar";
import ContentWrapper from "./ContentWrapper";
import'../assets/css/app.css';

function App(){
  return(
    <div id="wrapper">
      <Sidebar/>
      <ContentWrapper />
    </div>
  )
}

export default App