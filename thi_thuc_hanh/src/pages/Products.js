import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductModel from "../models/ProductModel";
function Products(props) {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(Math.random());
  useEffect(() => {
    ProductModel.getAll()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [reload]);
  const handleDelete = (id) => {
    ProductModel.delete(id)
      .then((res) => {
        alert("Xóa thành công");
        // window.location.reload();
        setReload(Math.random());
      })
      .catch((err) => {
        console.log(err);
        alert("da co loi xay ra ");
      });
  };
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <button className="btn btn-dark">
        {" "}
        <Link to="/products/create">Thêm sản phẩm</Link>{" "}
      </button>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th> ID </th>
            <th> Tên sản phẩm </th>
            <th> Giá </th>
            <th> Tồn kho </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => (
            <tr key={key}>
              <td>{product.id}</td>
              <td>
                <Link to={"/products/" + product.id}>{product.name}</Link>
              </td>
              <td>{product.price}</td>
              <td>{product.inventory}</td>
              <td>
                {/* <Link to={"/books/" + book.id}>Xem</Link>| */}
                <button className="btn btn-warning">
                  {" "}
                  <Link to={"/products/" + product.id + "/edit"}>Cập nhật</Link>
                </button>
                <button
                  className="btn btn-danger"
                  id="button2"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
