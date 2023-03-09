import React from "react";
import './scss/app.scss';
import Header from "./components/header/Header";
import MainComponent from "./components/mainComponent/MainComponent";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
