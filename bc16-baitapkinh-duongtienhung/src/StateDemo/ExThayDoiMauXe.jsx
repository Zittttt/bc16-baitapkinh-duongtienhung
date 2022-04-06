import React, { Component } from "react";

export default class ExThayDoiMauXe extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg",
  };

  handleDoiMauXe = (color) => {
    let newImgSrc = `./img/products/${color}-car.jpg`;
    this.setState({ imgSrc: newImgSrc });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <img src={this.state.imgSrc} alt="..." className="w-100" />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-3">
                <button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={() => {
                    this.handleDoiMauXe("black");
                  }}
                >
                  Black Car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    this.handleDoiMauXe("red");
                  }}
                >
                  Red Car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ backgroundColor: "silver" }}
                  onClick={() => {
                    this.handleDoiMauXe("silver");
                  }}
                >
                  Silver Car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ backgroundColor: "#CCC" }}
                  onClick={() => {
                    this.handleDoiMauXe("steel");
                  }}
                >
                  Steel Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
