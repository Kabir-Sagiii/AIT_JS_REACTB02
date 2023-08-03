import { Component } from "react";
import axios from "axios";

class Electronic extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      category: "",
      image: "",
      price: "",
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products/11").then((res) => {
      console.log(res.data);
      this.setState(res.data);
    });
  }
  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h2>{this.state.category} Category</h2>
        <div
          style={{
            width: "250px",
            boxShadow: "0 0 10px black",
            margin: "50px auto",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <img src={this.state.image} width="100%" height="200" />
          <h4>{this.state.title}</h4>
          <p>$ {this.state.price}</p>
          <button>Product Details</button>
        </div>
      </div>
    );
  }
}

export default Electronic;
