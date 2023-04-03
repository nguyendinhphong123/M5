import React from 'react';

class StudentList extends React.Component {
  render() {
    const { products } = this.props; // Lấy giá trị của props

    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {products.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StudentList;