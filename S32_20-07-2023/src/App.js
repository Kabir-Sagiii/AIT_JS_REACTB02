import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Card from "./components/Card/Card";
import Table from "./components/Table/Table";

import ListGroup from "./components/ListGroup/ListGroup";
import Home from "./components/Github/Home/Home";
import CarouselComp from "./components/Carousel/CarouselComp";
import Login from "./components/Forms/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <CarouselComp />
      {/* <ListGroup /> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-8">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
