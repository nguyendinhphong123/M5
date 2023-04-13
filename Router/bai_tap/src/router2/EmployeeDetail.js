import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail() {
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
    let {id} = useParams()
    return (
        <div>
            <h1>Id: {employees[id].id}</h1>
            <h2>Name: {employees[id].name}</h2>
            <h3>Tuổi: {employees[id].age}</h3>
            <p>Anh Phong tâm chào các bạn</p>
        </div>
    );
}

export default EmployeeDetail;