import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// [Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
// root.render(
//   <h4>Browser's details: {navigator.userAgent}</h4>
// );


// [Bài tập] Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học
// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]

// root.render(
//    <table>
//     <tr>
//       <th>Company</th>
//       <th>Contact</th>
//       <th>Country</th>
//     </tr>
  
//      {students.map(student => (
//     <tr>
//       <td>{student.company}</td>
//       <td>{student.contact}</td>
//       <td>{student.country}</td>
//     </tr>
//   ))}
   
//   </table>
// )

// [Bài tập] Tạo Element thể hiện Profile Card (như hình minh hoạ)
// root.render(
//   <div className="container">
//   <div className="card">
//     <div className="card--header" />
//     <img
//       className="avatar"
//       src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/321902114_3346000832278892_5345144987891029938_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FDxtup127CEAX_wsQAB&_nc_ht=scontent-nrt1-1.xx&oh=00_AfAWlFedxE2s7LH0KJPyoR6VtJ8pwcKBXOordJqx3Jadpw&oe=642937BF"
//       alt="avatar"
//     />
//     <div className="card--body">
//       <div>
//         <p className="text-header">Tạ Đình Phong</p>
//         <p className="text-sub">
//           Hãy đến với tôi
//         </p>
//         <button className="btn third">FOLLOW</button>
//       </div>
//     </div>
//   </div>
// </div>
// );

// [Bài tập] Tạo Element thể hiện Sign in Form sử dụng Bootstrap

root.render(
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
