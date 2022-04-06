import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          className="ml-2 p-2 border border-width-1"
          style={{ width: "110px", cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
          onClick={() => {
            this.changeGlasses(glassesItem);
          }}
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "70px",
      opacity: "0.8",
    };

    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,100,0,.5)",
      textAlign: "left",
      height: "105px",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.3)", minHeight: "2000px" }}>
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(148,0,211,.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="..."
                />
              </div>
              <div className="col-6">
                <div className="position-relative">
                  <img
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="..."
                    className="position-absolute"
                  />
                  <img
                    src={this.state.glassesCurrent.url}
                    alt=""
                    className="position-absolute"
                    style={styleGlasses}
                  />{" "}
                  <div className="position-relative " style={infoGlasses}>
                    <span
                      className="font-weight-bold"
                      style={{ color: "#AB82FF", fontSiz: "15px" }}
                    >
                      {this.state.glassesCurrent.name}
                    </span>
                    <br />
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Div chứa các kính được chọn */}
          <div className="bg-light container text-center mt-5 p-5 d-flex justify-content-center">
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
