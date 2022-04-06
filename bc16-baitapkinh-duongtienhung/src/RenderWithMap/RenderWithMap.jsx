import React, { Component } from "react";

export default class RenderWithMap extends Component {
  productList = [
    {
      id: 1,
      name: "black-car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red-car", img: "./img/products/red-car.jpg", price: 2000 },
    {
      id: 3,
      name: "silver-car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel-car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];

  renderProduct = () => {
    // let arrJSX = [];
    // for (let product of this.productList) {
    //   let trJSX = (
    //     <tr>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>
    //         <img src={product.img} alt="..." width={50} height={50} />
    //       </td>
    //       <td>{product.price}</td>
    //     </tr>
    //   );
    //   //Đưa tr vào mảng JSX
    //   arrJSX.push(trJSX);
    // }
    // return arrJSX;

    return this.productList.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <img src={product.img} alt="..." width={50} height={50} />
          </td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Product List</h3>
        <table className="table">
          <thead className="bg-dark text-light">
            <tr>
              <td>id</td>
              <td>name</td>
              <td>img</td>
              <td>price</td>
              <td></td>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
