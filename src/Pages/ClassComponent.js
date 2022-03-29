import React from "react";
import "../App.scss";

class ClassComponent extends React.Component {
  state = {
    number: 0,
  };

  handleCountIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleCountDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="container-heading"> Counting By Class Component</h1>
          <button onClick={this.handleCountIncrease}>
            <span>Increase</span>
          </button>
          <p className="couting">Is counting {this.state.number}</p>
          <button onClick={this.handleCountDecrease}>
            <span>Decrease</span>
          </button>
        </div>
      </>
    );
  }
}

export default ClassComponent;
