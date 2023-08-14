import React, { Component } from "react";
var cardStyle = {
  width: "300px",
  margin: "50px auto",
  padding: "20px",
  textAkign: "center",
  boxShadow: "0 0 10px black",
};
class Profile extends Component {
  render() {
    if (this.props.name === null && this.props.image === null) {
      throw new Error("No data");
    } else {
      return (
        <div style={cardStyle}>
          <img src={this.props.image} width="300" height="200" />
          <h2>{this.props.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nemo
            iure officiis ipsum natus eligendi.
          </p>
          <button>Profile</button>
        </div>
      );
    }
  }
}

export default Profile;
