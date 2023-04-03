//rsf
import React, { useState } from 'react';

function StateFun(props) {
    const [color,setColor] = useState('white');
    const [brand,setBrand] = useState('VinFast');
    const [model,setModel] = useState('VF9');
    const [year,setYear] = useState(2023);

    const handleChangeColor = () => {
        setColor('red');
    }
    const hello = (name) => {
        alert('xin chao' + name)
    }
    return (
        <div>
            <h1>FUNCITON COMPONENT</h1>
            <h1>thuong hieu: {brand}</h1>
            <h1>Kieu: {model}</h1>
            <h1>Nam: {year}</h1>
            <h1>mau: {color}</h1>
            <button onClick={() => handleChangeColor()}> Doi mau</button>
            <button onClick={() => hello(' nho')}> hello</button>
        </div>
    );
}

export default StateFun;