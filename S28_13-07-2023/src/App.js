import { useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/ContextTask-2/Main";
import { AuthContext } from "./components/ContextTask-2/Context";

// import Header from "./components/Header/Header";
// import Main from "./components/ContextAPI-Task/Main";
// import AuthContext from "./components/ContextAPI-Task/Context";

function App() {
  const [bgcolor, setBgColor] = useState("white");
  return (
    <div className="App" style={{ background: bgcolor }}>
      <Header />
      <div
        style={{ marginTop: "30px", textAlign: "right", marginRight: "50px" }}
      >
        <button
          onClick={() => {
            setBgColor("white");
          }}
        >
          Light theme
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => {
            setBgColor("black");
          }}
          style={{ background: "black", color: "white" }}
        >
          Dark theme
        </button>
      </div>
      {/* <h1 style={{ color: "green" }}>{data}</h1> */}
      <Main />
    </div>
  );

  // const [isloggedin, setIsLoggedIn] = useState(false);
  // const logout = () => {
  //   setIsLoggedIn(false);
  // };
  // const login = () => {
  //   setIsLoggedIn(true);
  // };

  // return (
  //   <div className="App">
  //     <AuthContext.Provider value={{ isloggedin, login, logout }}>
  //       <Header />
  //       <Main />
  //     </AuthContext.Provider>

  //   </div>
  // );
}

export default App;
