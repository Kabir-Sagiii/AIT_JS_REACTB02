import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../ContextTask-2/Context";

function Header() {
  const { logout, isloggedin } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="title">
        <h1> Context API</h1>
      </div>

      <div className="menus">
        <a href="#">HOME</a>
        <a href="#">PRODUCTS</a>
        <a href="#">PROFILE</a>
        <a href="#">HELP</a>
        {isloggedin ? (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
