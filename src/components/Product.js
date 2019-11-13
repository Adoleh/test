import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Hello</h1>
          <span> {this.props.name}</span>
          <span> {this.props.price} QR </span>
          <br />
          <button onClick={this.props.onInc}>+</button>
          <span>{this.props.amount}</span>
          <button onClick={this.props.onDec}>-</button>
          <button onClick={this.props.onDel}>Del</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
