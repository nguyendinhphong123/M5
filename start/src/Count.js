import React, { Component } from 'react';

class Count extends Component {
    constructor(props){
        super(props);
        //khai bao state count
        this.state = {
            count : 0
        }
    }

    //phupng thuc xu ly
    setCount = () => {
        this.setState(prevState =>({
            count: prevState.count +1
        }));
    }

    render() {
        return (
            <div>
                <h1>Chuong trinh dem</h1>
                <h1>Hien thi so lan Click: {this.state.count}</h1>
                <button onClick={this.setCount}>tăng len</button>
            </div>
        );
    }
}

export default Count;