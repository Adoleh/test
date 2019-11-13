import React, { Component } from "react";

class Random extends Component {
  state = {
    arr: Array.from({ length: 8 }).map(() => Math.floor(Math.random() * 9 + 1)),
    pics: [
      "chicken.png",
      "crab.png",
      "dolphin.png",
      "gold-fish.png",
      "horse.png",
      "octopus.png",
      "rabbit.png",
      "turtle.png"
    ],
    pics1: [
      "card.png",
      "card.png",
      "card.png",
      "card.png",
      "card.png",
      "card.png",
      "card.png",
      "card.png"
    ],
    count: 0
  };
  handleInc = () => {
    let temp = [...this.state.arr, Math.floor(Math.random() * 10 + 1)];
    this.setState({ arr: temp });
  };
  handleSuffle = () => {
    let index = this.state.pics.length;

    while (index--) {
      let r = Math.floor(Math.random() * (index + 1));
      let temp = this.state.pics[r];
      this.state.pics[r] = this.state.pics[index];
      this.state.pics[index] = temp;
    }
    this.setState({ flag: !this.state.flag });
  };

  chnagePic = index => {
    let temp = [...this.state.pics1];
    let tempO = [...this.state.pics];

    if (temp[index] == "card.png" && this.state.count < 2) {
      temp[index] = tempO[index];
      this.setState({ count: this.state.count + 1 });

      this.setState({ pics1: temp });
    } else if (temp[index] != "card.png") {
      temp[index] = "card.png";
      this.setState({ count: this.state.count - 1 });
      this.setState({ pics1: temp });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.arr}
          <br />
          <button onClick={this.handleInc}>+</button>
          <br />

          {this.state.pics1.map((x, i) => {
            return i % 2 === 0 ? (
              <img
                onClick={() => this.chnagePic(i)}
                style={{ width: 200 }}
                src={`./images/${x}`}
                alt="this is an image"
              />
            ) : (
              <React.Fragment>
                <img
                  onClick={() => this.chnagePic(i)}
                  style={{ width: 200 }}
                  src={`./images/${x}`}
                  alt="this is an image"
                />
                <br />
              </React.Fragment>
            );
          })}
          <br />
          <button onClick={this.handleSuffle}>Change Animals</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Random;
