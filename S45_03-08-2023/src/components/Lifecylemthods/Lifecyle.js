import { Component } from "react";

class LifecyleComp extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate is called");
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  constructor() {
    super();
    console.log("Constructor is called");
    this.state = {
      title: "LifeCycle Methods",
    };
  }
  render() {
    console.log("render is called");
    return (
      <div style={{ margin: "100px auto", width: "500px" }}>
        <h2>{this.state.title}</h2>
        <button
          onClick={() => {
            this.setState({
              title: "Lifecyle Component is Updated",
            });
          }}
        >
          Change Content
        </button>
      </div>
    );
  }
}

export default LifecyleComp;
