import React from "react";

class AppUgly extends React.Component {
  state = { item: 1 };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.increament}>increament</button>
        <button onClick={this.decreament}>decreament</button>
      </div>
    );
  }
  increament = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decreament = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default AppUgly;
