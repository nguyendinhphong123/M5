import React, { useEffect, useState } from "react";
import BookModel from "../models/BookModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Books(props) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState( Math.random() );
  useEffect(() => {
    BookModel.getAll()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [reload]);
  const handleDelete = (id) => {
    BookModel.delete(id)
      .then((res) => {
        // navigate("/");
        alert('Xóa thành công');
		// window.location.reload();
        setReload(Math.random())
      })
      .catch((err) => {
        console.log(err);
        alert("da co loi xay ra ");
      });
  };
  return (
    
    <div>
        
        <h1>Library</h1>
       <button className="btn btn-dark"> <Link to="/books/create">Add a new Book</Link> </button>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th> ID </th>
            <th> Title </th>
            <th> Quantity </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, key) => (
            <tr key={key}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                {/* <Link to={"/books/" + book.id}>Xem</Link>| */}
               <button className="btn btn-warning"> <Link to={"/books/" + book.id + "/edit"}>Edit</Link></button>
                <button className="btn btn-danger" id="button2" onClick={ () => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default Books;