import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import BookModel from '../models/BookModel';

const rules = Yup.object().shape({
  title: Yup.string().required('Truong yeu cau').min(3, 'Toi thieu 3 ky tu').max(255, 'Toi da 255'),
});



function BookAdd(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    quantity: ''
  })
  const [books, setBooks] = useState([]);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (event) => {
    setFormData(
      {
        ...formData,
        [event.target.title]: event.target.value,
        [event.target.quantity]: event.target.value
      }
    )
  }
  const handleSubmit = (values) => {
    
    BookModel.store(values)
      .then((res) => {
        alert(`Tạo mới thành công`);
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });

    // Làm rỗng formik
  }

  return (
    <div>
      <h1>Add a new Book</h1>
      <Formik
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (<Form>
          <strong>Title</strong> <br></br>
          <Field name="title" /> <br />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
           <strong>Quantity</strong> <br></br>
          <Field name="quantity" /> <br /> <br></br>
          <button > Add </button>
        </Form>

        )}
      </Formik>
    </div>
  );
}

export default BookAdd;