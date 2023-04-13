// [Bài tập] Xử lý sự kiện Login/Logout với form đăng nhập bằng Bootstrap

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import Home from "./Home";
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {email:"", password:"",isRemember:false},
//       isvaild: false,
//       isLoggedIn: false
//     }
//   }
//   handleChange = (event) => {
//     this.setState((state) => {
//       const { form } = state
//       form[event.target.name] = event.target.value
//       return { form }
//     }, () => this.checkValidForm())
//   }
  
//   handleChangeCheckbox = () => {
//     this.setState((state) => {
//       const { form } = state
//       form.isRemember = !form.isRemember
//       return { form }
//     }, () => this.checkValidForm())
//   }
 
//   checkValidForm = () => {
//     const { email, password } = this.state.form
//     const value = email && password
//     this.setState({ isValid: value })
//   }
 
//   handleSubmit = () => {
//     if (this.state.isValid){
//       this.setState({ isLoggedIn: true })
//     }
//   }
 
//   handleLogOut = () => {
//     this.setState({ isLoggedIn: false })
//   }
//   render() {
//     const { isLoggedIn, form } = this.state
//     if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
//     return (
//       <div className="container d-flex align-items-center text-center">
//         <div className="form-signin">
//           <form>
//             <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
//             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//             <div className="form-floating">
//               <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
//               <label>Email address</label>
//             </div>
//             <div className="form-floating">
//               <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
//               <label>Password</label>
//             </div>
//             <div className="checkbox mb-3">
//               <label>
//                 <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
//               </label>
//             </div>
//             <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
//             <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

// [Bài tập] Component Expand/Collapse nội dung

// import React, { Component } from 'react';
// class App extends Component {
//   // code sẽ được viết sau
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpand: false
//     };
//   }
//   handleClick = () => {
//     this.setState({ isExpand: !this.state.isExpand });
//   }
//   render() {
//     const { isExpand } = this.state;
//     return (
//       <div>
//         <h1>Conditional Rendering</h1>
//         {isExpand ? (
//           <div>
//             <button onClick={this.handleClick}>Đóng giới thiệu</button>
//             <h1>Giới thiệu</h1>
//             <p>Nội dung giới thiệu</p>
//           </div>
//         ) : (
//           <button onClick={this.handleClick}>Xem giới thiệu</button>
//         )}
//       </div>
//     );
//   }
// }
// export default App;

// [Bài tập] Ứng dụng quản lý học sinh (CRUD sử dụng Table)
import React, { Component } from 'react';
 import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name:'',phone:'',email:''},
      isVaild: false,
      indexSelected: -1
    };
  }

  handleChange = (event) => {
    this.setState((state) => {
      const form = state.form
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkInvalidForm())
  }
  handleSelect = (studentSelected, index) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)),
      indexSelected: index
    })
  }
  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form
    const value = name && phone && email
    this.setState({
      isValid: value
    })
  }
  handleSubmit = () => {
    if(this.state.isValid){
      const newList = this.state.studentList
      if (this.state.indexSelected > -1) {
        newList[this.state.indexSelected] = this.state.form //cập nhật dữ liệu sinh viên hiện có
      } else {
        newList.push(this.state.form) //thêm dữ liệu sinh viên mới
      }
      this.setState({
        studentList: newList,
        form: { name:'',phone:'',email:''},
        indexSelected: -1,
        isValid: false
      })
    }
  }
  handleDelete = (index) => {
    const newList = [...this.state.studentList]
    newList.splice(index, 1) // remove student data
    this.setState({
    studentList: newList
})
  }
  render() {
    const { studentList, form } = this.state
    return (
      <div>
        <div>
            <h1>Student List</h1>
            <div>
              <label>Name: </label>
              <input name="name" value={form.name} onChange={this.handleChange} />
            </div>
            <div>
              <label>Phone: </label>
              <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
            </div>
            <div>
              <label>Email: </label>
              <input name="email" value={form.email} onChange={this.handleChange} />
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
            <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sử dụng phương thức map() để in danh sách student
                    Tạo button Edit với onClick gọi tới hàm handleSelect
                    Tạo button Delete với onClick gọi tới hàm handleDelete
                */ }

                      {studentList.map((student, index) => (
                      <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.phone}</td>
                      <td>{student.email}</td>
                      <td>
                      <button onClick={() => this.handleSelect(student, index)}>Edit</button>
                      <button onClick={() => this.handleDelete(index)}>Delete</button>
                      </td>
                      </tr>
                      ))}
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default App;
