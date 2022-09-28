import React from "react";
import ReactDOM from "react-dom";
class AppUgly extends React.Component {
  state = { item: 1 };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
}

incrementItem = () => {
  this.setState((state) => {
    return {
      item: state.item + 1,
    };
  });
};

decrementItem = () => {
  this.setState((state) => {
    return {
      item: state.item + 1,
    };
  });
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<AppUgly />, rootElement);
