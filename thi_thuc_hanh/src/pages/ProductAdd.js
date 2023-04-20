import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ProductModel from "../models/ProductModel";

const rules = Yup.object().shape({
  name: Yup.string()
    .required("Truong yeu cau")
    .min(3, "Toi thieu 3 ky tu")
    .max(255, "Toi da 255"),
  price: Yup.string()
    .required("Truong yeu cau")
    .min(3, "Toi thieu 4 ky tu")
    .max(255, "Toi da 255"),
});

function ProductAdd(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    inventory: "",
    description: "",
  });
  // const [books, setBooks] = useState([]);
  // const [formErrors, setFormErrors] = useState([]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.price]: event.target.value,
      [event.target.inventory]: event.target.value,
      [event.target.description]: event.target.value,
    });
  };
  const handleSubmit = (values) => {
    ProductModel.store(values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("da co loi xay ra ");
      });
    // Làm rỗng formik
  };

  return (
    <div>
      <h1>Thêm sản phẩm</h1>
      <Formik
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <strong>Name</strong> <br></br>
            <Field name="name" /> <br />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <strong>Giá</strong> <br></br>
            <Field name="price" /> <br />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <strong>Tồn kho</strong> <br></br>
            <Field name="inventory" /> <br /> <br></br>
            <strong>Mô tả</strong> <br></br>
            <Field name="description" /> <br /> <br></br>
            <button> Thêm mới </button>
            <a href="/">Hủy</a>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductAdd;
