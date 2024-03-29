import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Routing/Home";
import Profile from "./components/Routing/Profile";
import Products from "./components/Routing/Products";
import Help from "./components/Routing/Help";
import "bootstrap/dist/css/bootstrap.css";
import GithubHome from "./components/Github/Home/Home";
import { Route, Routes } from "react-router-dom";
import Pagenotfound from "./components/Routing/Pagenotfound";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/github" element={<GithubHome />} />

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
