import { Component } from "react";

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
