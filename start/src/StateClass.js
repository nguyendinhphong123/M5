//rcc
import React, { Component } from 'react';

class StateClass extends Component {
    constructor(props){
        super(props);
        //khai bao state
        this.state = {
            brand: 'VinFast',
            model: 'VF9',
            color: 'white',
            year: 2023,
            age: 17
        }

        // this.setColor = this.setColor.bind(this);
    }

    setAge = () => {
        this.setState({age: 18});
    }

    setColor = () => {
        this.setState({color: "Red"});
          // this.setState({color: "Red"});
          this.setState(prevState =>({
            color: (prevState.color == 'white') ? 'red' : 'yellow'
        }));
    }

    hello = (name) => {
       alert ('Xin chào' + name);
       
    }
    // setColor () {
    //     // this.setState({color: "Red"});
    //     this.setState(prevState =>({
    //         color: (prevState.color == 'white') ? 'red' : 'yellow'
    //     }));
    // }
    render() {

        if(this.state.age >= 18){
            return(
                <h1>ban duoc uong ruou</h1>
            )
        }else{
          
        return (
            <div>
                <h1>Ban duoc uong bia</h1>
                <h1>Thương Hiệu: {this.state.brand}</h1>
                <h1>Kiểu: {this.state.model}</h1>
                <h1>Màu: {this.state.color}</h1>
                <h1>Năm SX: {this.state.year}</h1>
                <h1>Năm SX: {this.state.age}</h1>
                <button onClick={this.setAge}> Đổi age</button>
                <button onClick={this.setColor}> Đổi màu</button>
                <button onClick={() => this.hello(' nho')}> hello</button>
            </div>
        );
    }
    }
}

export default StateClass;
