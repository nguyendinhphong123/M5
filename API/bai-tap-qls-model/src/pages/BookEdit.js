import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
import BookModel from '../models/BookModel';

const rules = Yup.object().shape({
  title: Yup.string().required('Truong yeu cau').min(3, 'Toi thieu 3 ky tu').max(255, 'Toi da 255'),
});
function BookEdit(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    quantity: ''
  })
  useEffect(() => {
    BookModel.find(id)
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
      title : values.title,
      quantity : values.quantity

    }
    BookModel.update(id,data)
      .then((res) => {
        alert('Chỉnh sửa thành công');
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });

    // Làm rỗng formik
  }


  return (
    <div>

      <h1>Edit</h1>
      <Formik
       enableReinitialize={true}
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
        <Form>
          <strong>Title</strong> <br></br>
          <Field name="title" /> <br />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <strong>Quantity</strong> <br></br>
          <Field name="quantity" /> <br /> <br></br>
          <button > Save </button>
        </Form>

        )}
      </Formik>
    </div>
  );
}

export default BookEdit;