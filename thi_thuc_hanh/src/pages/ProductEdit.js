import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";
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
function ProductEdit(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    inventory: "",
    description: "",
  });
  useEffect(() => {
    ProductModel.find(id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    let data = {
      name: values.name,
      price: values.price,
      inventory: values.inventory,
      description: values.description,
    };
    ProductModel.update(id, data)
      .then((res) => {
        alert("Chỉnh sửa thành công");
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });

    // Làm rỗng formik
  };

  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      <Formik
        enableReinitialize={true}
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <strong>Tên sản phẩm</strong> <br></br>
            <Field name="name" /> <br />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <strong>Giá</strong> <br></br>
            <Field name="price" /> <br />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <strong>Tồn kho</strong> <br></br>
            <Field name="inventory" /> <br /> <br></br>
            <strong>Mô tả</strong> <br></br>
            <Field name="description" /> <br /> <br></br>
            <button> Cập nhật </button>
            <a href="/">Hủy</a>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductEdit;
