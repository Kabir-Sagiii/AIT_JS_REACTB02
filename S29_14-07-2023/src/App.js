import { useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <button className="btn btn-primary">Bootstrap</button>
    </div>
  );
}

export default App;
