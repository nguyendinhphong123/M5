// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';
    
// describe('App component', () => {
//     it('Start with default value', () => {
//         const component = shallow(<App />);
//         const defaultValue = component.find('div.default-value').text();
//         expect(defaultValue).toEqual('0');
//     });
// })

// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';
    

//khai báo kiểm thử trong app component
// describe('App component', () => {
    //khai báo trường hợp   kiểm thử
//     it('increments count by 1 when the increment button is clicked', () => {
    // lấy toàn bộ thẻ html trong App
//         const component = shallow(<App />);
    // tìm phần tử 
//         const incrementBtn = component.find('button.increment');
    // thực hiện hành động click
//         incrementBtn.simulate('click');
//         const text = component.find('div.counter-value').text();
    // kết quả mong đợi
//         expect(text).toEqual('Count: 1');
//     });
// })

// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';
    
// describe('App component', () => {
//     it('Should render without errors', () => {
//         const component = shallow(<App />);
//         const wrapper = component.find('.app-pages');
//         expect(wrapper.length).toBe(1);
//     })
// })

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, { getSum } from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('Kiem thu cho App component', () => {
    // Case 1
  it('Kiểm tra xem hàm trả về có đúng tổng 2 số không', () => {
    expect(getSum(1,1)).toEqual(2);
  }),
  // Case 2
  it('value-one-input có được render không', () => {
    const wrapper = shallow(<App />);
    const valueOneInput = wrapper.find('[data-testid="value-one-input"]');
    expect(valueOneInput.length).toEqual(1);
  });

  // Case 3
  it('value-two-input có được render không', () => {
    const wrapper = shallow(<App />);
    const valueTwoInput = wrapper.find('[data-testid="value-two-input"]');
    expect(valueTwoInput.length).toEqual(1);
  });

  // Case 4
  it('button-add có được render không', () => {
    const wrapper = shallow(<App />);
    const ButtonAdd = wrapper.find('[data-testid="button-add"]');
    expect(ButtonAdd.length).toEqual(1);
  });

  // Case 5
  it('result có được render không', () => {
    const wrapper = shallow(<App />);
    const Result = wrapper.find('[data-testid="result"]');
    expect(Result.length).toEqual(1);
  });
  // Case6
  it('Test component có hiển thị kết quả tính tổng đúng hay không', () => {
    const wrapper = shallow(<App />);
    const buttonElement  = wrapper.find('#ClickMe');
    buttonElement.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('You clicked me :: 1');
  });

})