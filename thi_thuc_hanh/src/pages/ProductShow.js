import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductModel from "../models/ProductModel";

function ProductShow(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(function () {
    ProductModel.find(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <a href="/">Danh sách</a>
      <table border={1} width={"100%"}>
        <tr>
          <td>Name</td>
          <td>{product.name}</td>
        </tr>
        <tr>
          <td>Giá</td>
          <td>{product.price}</td>
        </tr>
        <tr>
          <td>Tồn kho</td>
          <td>{product.inventory}</td>
        </tr>
        <tr>
          <td>Mô tả</td>
          <td>{product.description}</td>
        </tr>
      </table>
    </div>
  );
}

export default ProductShow;
