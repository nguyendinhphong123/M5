// [Bài tập] Tạo form liên hệ
// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import "./App.css";

// export default function App(){
//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//   };
//   const [form,setForm] = useState({});

//   function handleChange(event){
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//   }
//   function handleValidate(){
//     const errors = {};
//     if(!form.name){
//       errors.name = "Required";
//     }
//     if(!form.email){
//       errors.email = "Required";
//     }else if(!REGEX.email.test(form.email)){
//       errors.email = "Invalid email address";
//     }
//     if(!form.phone){
//       errors.phone = "Required";
//     }
//     return errors;
//   }

//   function handleSubmit(){
//     alert('Thêm liên hệ thành công')
//   }

//   return (
//     <div>
//       <h1>Contact form</h1>
//       <Formik
//         initialValues={form}
//         validate={handleValidate}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div
//               className={`custom-input ${
//                 errors.name ? "custom-input-error" : ""
//               }`}
//             >
//               <label>Name</label>
//               <input
//                 type="text" name="name" value={form.name || ""} onChange={handleChange}
//               />
//               <p className="error">{errors.name}</p>
//             </div>
//             <div
//               className={`custom-input ${
//                 errors.email ? "custom-input-error" : ""}`}
//             >
//               <label>Email</label>
//               <input
//                 type="email" name="email" value={form.email || ""} onChange={handleChange}
//               />
//               <p className="error">{errors.email}</p>
//             </div>
//             <div
//               className={`custom-input ${
//                 errors.phone ? "custom-input-error" : ""}`}
//             >
//               <label>Phone</label>
//               <input
//                 type="text" name="phone" value={form.phone || ""} onChange={handleChange}
//               />
//               <p className="error">{errors.phone}</p>
//             </div>
//             <div>
//               <label>Message</label>
//               <textarea></textarea>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// [Bài tập] Ứng dụng quản lý sách
import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);
  const [errors, setErrors] = useState({});

 const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleValidate = (values) => {
    let errors = {};
    if (!values.title || values.title.trim() === '') {
      errors.title = 'Required';
    }
    if (!values.quantity || values.quantity.trim() === '') {
      errors.quantity = 'Required';
    }
    return errors;
  };

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    let newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = (values, actions) => {
    let newBooks = JSON.parse(JSON.stringify(books));
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, values);
    } else {
      newBooks.push(values);
    }
    setBooks(newBooks);
    setForm({});
    setIndexSelected(-1);
    actions.resetForm();
  };

  return (
    <div className="container">
      <h1>Quản lý sách</h1>
      <Formik initialValues={form} validate={handleValidate} onSubmit={handleSubmit}>
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="custom-input">
              <label htmlFor="title">Tiêu đề:</label>
              <input
                type="text"
                name="title"
                id="title"
                value={values.title || ''}
                onChange={handleChange}
              />
              {errors.title && <p className="error">{errors.title}</p>}
            </div>
            <div className="custom-input">
              <label htmlFor="quantity">Số lượng:</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={values.quantity || ''}
                onChange={handleChange}
              />
              {errors.quantity && <p className="error">{errors.quantity}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Số lượng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => handleSelect(book, index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;