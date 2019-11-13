import React, { Component, Fragment } from "react";
import "./App.css";
import Product from "./components/Product";
import Random from "./components/Random";

class App extends Component {
  state = {
    phones: [
      { id: 1, price: 500, type: "Iphone X", amount: 0 },
      { id: 2, price: 300, type: "Iphone 8", amount: 0 },
      { id: 3, price: 200, type: "Iphone 11", amount: 0 }
    ]
  };

  handleInc = index => {
    let temp = [...this.state.phones];
    temp[index].amount++;
    this.setState({ phones: temp });
  };

  handleDec = index => {
    let temp = [...this.state.phones];
    temp[index].amount--;
    this.setState({ phones: temp });
  };

  handleDel = index => {
    let temp = this.state.phones.filter(x => x.id != index);
    this.setState({ phones: temp });
  };

  render() {
    let total = this.state.phones.reduce(
      (acc, curr) => curr.amount * curr.price + acc,
      0
    );
    return (
      <React.Fragment>
        {this.state.phones.map((item, index) => (
          <Product
            key={index}
            name={item.type}
            price={item.price}
            onInc={() => this.handleInc(index)}
            onDec={() => this.handleDec(index)}
            amount={item.amount}
            onDel={() => this.handleDel(item.id)}
          />
        ))}
        <label>Total: </label> {total}
        <br />
        <br />
        <Random />
      </React.Fragment>
    );
  }
}
export default App;
