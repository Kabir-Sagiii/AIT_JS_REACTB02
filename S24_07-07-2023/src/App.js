import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";
import ImageComp from "./components/Image/ImageComp";
import Users from "./components/Users/User";
import Products from "./components/Products/Products";
import ProductsCard from "./components/Products/ProductsCard";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
