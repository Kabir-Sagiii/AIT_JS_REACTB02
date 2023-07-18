import { createContext, useState } from "react";
// import App from "../../App";

export let AuthContext = createContext();

function CustomProviderComp({ children }) {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const logout = () => {
    setIsLoggedIn(false);
  };
  const login = () => {
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={{ isloggedin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProviderComp;
