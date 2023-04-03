import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props){
        super(props);

        //khai bao state: soA, soB, result
        this.state = {
            soA: 0,
            soB: 0,
            result: 0
        }
    }

    setSoA = (value) => {
        this.setState({soA:value});
    }
    setSoB = (value) => {
        this.setState({soB:value});
    }
    // khai bao 4 PT cong,tru,nhan,chia
    cong = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA + soB;
        this.setState({result: kq});
    }
    tru = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA - soB;
        this.setState({result: kq});
    }
    nhan = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA * soB;
        this.setState({result: kq});
    }
    chia = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA / soB;
        this.setState({result: kq});
    }
    render() {

        return (
            <div>
                
                    So thu nhat: <input type={'text'} 
                        onChange={(e) => this.setSoA(e.target.value)}
                    /> <br/>
                    So thu hai: <input type={'text'} 
                        onChange={(e) => this.setSoB(e.target.value)}
                    /> <br/>
                    <p>Ket qua: {this.state.result}</p>
                    <button onClick={this.cong}> + </button>
                    <button onClick={this.tru}> - </button>
                    <button onClick={this.nhan}> * </button>
                    <button onClick={this.chia}> / </button>
                
            </div>
        );
    }
}

export default Calculator;