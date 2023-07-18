import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Card from "./components/Card/Card";
import Table from "./components/Table/Table";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Table />

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
