import React from "react";
import { useNavigate } from "react-router-dom";

function Employee() {
    const navigate = useNavigate();
    const handleDetailClick = (id) => {
        navigate("/employee-detail/"+ id);
      };
    const employees = [
        {
            id: 1,
            name: "Nguyễn Đình Phong",
            age: 20
        },
        {
            id: 2,
            name: "Nguyễn Thúc Thùy Tiên",
            age: 25
        },
        {
            id: 3,
            name: "Nguyễn Quang Linh",
            age: 22
        },
    ]
    return (
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee,key) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>
                    <button onClick={() => handleDetailClick(key)}>
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Employee;