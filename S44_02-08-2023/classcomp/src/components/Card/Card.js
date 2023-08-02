import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shopping",
    };
  }

  updateState = () => {
    this.setState({
      name: "Shopping Cart",
    });
  };

  render() {
    return (
      <div
        style={{
          width: "250px",
          boxShadow: "0 0 10px black",
          height: "400px",
          margin: "50px auto",
        }}
      >
        <img src={this.props.image} width="100%" height={200} />
        <h3>{this.state.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          illum inventore quos tenetur consectetur illo?
        </p>
        <button onClick={this.updateState}>Shop Now</button>
      </div>
    );
  }
}
export default Card;
