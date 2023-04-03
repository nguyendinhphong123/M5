import React from "react";
import { useState } from "react";

function TodoFun(props) {
  // khai bao sates
  
  const [editId, setEditId] = useState(-1);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // khai bao cac pt xu li
  const handleSetTodo = (value) => {
    setTodo(value);
  };
  const addTodo = () => {
    let cr_todos = todos;
    cr_todos.push(todo);

    setTodos(cr_todos);

    setTodo('');
  };
  const editTodo = (id) => {
     // Lay todo tu mang
     let todo = todos[id];

     // Set editId
     setEditId(id);

     // Dua gia tri vao o input
     setTodo(todo);
  };
  const deleteTodo = (id) => {
     // const ask = confirm('Ban co chac chan xoa');
        // if( ask == true ){
            let cr_todos = [...todos];
            cr_todos.splice( id,1 );
            setTodos(cr_todos);
        // }
  };
  const updateTodo = () => {
    const id = editId;
    //Cap nhat mang cr_todos
    let cr_todos = todos;
    cr_todos[id] = todo;
    // thiet lap gia tri todos
    setTodos(cr_todos);

    // Lam rong todo
    setTodo("");

    // Set editId
    setEditId(-1);
  };
  const addButton = <button onClick={() => addTodo()}> Add </button>;
  const updateButton = <button onClick={() => updateTodo()}> Update </button>;
    return (
        <div>
            <h1> {todo} </h1>
            <input type={'text'}
                onChange={(e) => handleSetTodo(e.target.value)}
                value={ todo }
            />

            { editId === - 1 ? addButton : updateButton  }
            <br />
            <table>
                <thead>
                    <tr>
                        <th> Ten nhiem vu </th>
                        <th> Hanh dong </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map( (todo,key) => (
                            <tr key={key}>
                                <td>
                                    {todo}
                                </td>
                                <td> 
                                    <button onClick={ () => editTodo(key) }> Edit </button> 
                                    | 
                                    <button onClick={ () => deleteTodo(key) }> Delete </button> 
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TodoFun;