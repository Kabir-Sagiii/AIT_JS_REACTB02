import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/ContextAPI-Task/Main";

function App() {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const logout = () => {
    setIsLoggedIn(false);
  };
  const login = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      <Header isloggedin={isloggedin} logout={logout} />
      <Main isloggedin={isloggedin} login={login} />
    </div>
  );
}
// var showComponent1 = true;
// if (showComponent1) {
//   return <Component1 />;
// } else {
//   return <Component2 />;
// }

//   return (
//     <div className="App">
//       <Header />
//       {showComponent1 ? (
//         <Component1>
//           <ol>
//             <li>HTML</li>
//             <li>CSS</li>
//           </ol>
//           <Component2 />
//           <ul>
//             <li>Java</li>
//             <li>Springboot</li>
//           </ul>
//         </Component1>
//       ) : (
//         <Component2> </Component2>
//       )}
//     </div>
//   );
// }

export default App;
