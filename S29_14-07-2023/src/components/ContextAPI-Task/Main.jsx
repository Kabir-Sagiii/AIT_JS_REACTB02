import { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import AuthContext from "./Context";

function Main() {
  const { isloggedin } = useContext(AuthContext);
  return <div>{isloggedin ? <Home /> : <Login />}</div>;
}

export default Main;
