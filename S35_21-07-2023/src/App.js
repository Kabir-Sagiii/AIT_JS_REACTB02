import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Card from "./components/Card/Card";
import Table from "./components/Table/Table";

import ListGroup from "./components/ListGroup/ListGroup";
import Home from "./components/Github/Home/Home";
import CarouselComp from "./components/Carousel/CarouselComp";
import Login from "./components/Forms/Login";
import PaginationComp from "./components/Pagination/PaginationComp";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      {/* <PaginationComp /> */}
    </div>
  );
}

export default App;
