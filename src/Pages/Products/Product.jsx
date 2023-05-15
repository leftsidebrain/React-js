import React from "react";
import { dataArray, data } from "./Data";

export default function Product() {
  return (
    <div className="container">
      <h2>Product</h2>

      <table class="table table-striped table-sm">
        <thead>
          <tr style={{ backgroundColor: "lightblue" }}>
            <th scope="col">No</th>
            <th scope="col">Nama Produk</th>
            <th scope="col">Gambar</th>
            <th scope="col">Harga</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item, index) => {
            return (
              <tr>
                <th>{(index += 1)}</th>
                <td>{item.productName}</td>
                <td>{item.imgUrl}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
