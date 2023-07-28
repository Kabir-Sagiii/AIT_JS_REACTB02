import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Routing/Home";
import Profile from "./components/Routing/Profile";
import Products from "./components/Routing/Products";
import Help from "./components/Routing/Help";
import Counter from "./components/Reducer/Counter";
import "bootstrap/dist/css/bootstrap.css";
import GithubHome from "./components/Github/Home/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Pagenotfound from "./components/Routing/Pagenotfound";
import Electronics from "./components/Routing/Electronics";
import Jewelery from "./components/Routing/Jewelery";
import ProductDetails from "./components/Routing/ProductDetails";
import InputComp from "./components/Redux/component/InputComp";
function App() {
  return (
    <div className="App">
      <Header />
      <InputComp />
      {/* <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="electronics" />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
        </Route>

        <Route path="/profile" element={<Main />} />
        <Route path="/github" element={<GithubHome />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/reducer" element={<Counter />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes> */}
    </div>
  );
}

export default App;
