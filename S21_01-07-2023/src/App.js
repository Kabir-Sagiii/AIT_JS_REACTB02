import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";
import ImageComp from "./components/Image/ImageComp";
import Users from "./components/Users/User";

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <ImageComp />
      <Counter />
    </div>
  );
}

export default App;
