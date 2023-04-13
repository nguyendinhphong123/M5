// [Bài tập] Tạo toolbar

// import Layout from "./layout";
// import React from 'react';

// function index(props) {
//   return (
//     <div>
//       <Layout></Layout>
//     </div>
//   );
// }
// export default index;

// [Bài tập] Tạo form login với CSS Styling
// import styles from '../styles/Login.module.css';

// export default function Home(){
//   return (
//     <div className={styles.container}>
//     <form className={styles.form}>
//       <h1>Đăng nhập</h1>
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   </div>
//   );
// }


// [Bài tập] Lấy thông tin COVID-19 tại Việt Nam
import axios from 'axios';
const Home = ({ covidData }) => {
  return (
    <div>
      <h1>COVID-19 Tracker</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Ngày thống kê</th>
            <th>Số ca được xác nhận</th>
            <th>Số ca đang điều trị</th>
            <th>Số ca đã khỏi</th>
            <th>Số ca tử vong</th>
          </tr>
        </thead>
        <tbody>
          {covidData.map((data) => (
            <tr key={data.Date}>
              <td>{new Date(data.Date).toLocaleDateString()}</td>
              <td>{data.Confirmed}</td>
              <td>{data.Active}</td>
              <td>{data.Recovered}</td>
              <td>{data.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      'https://api.covid19api.com/total/country/vietnam'
    );
    const covidData = response.data;
    return { props: { covidData } };
  } catch (error) {
    console.error(error);
    return { props: { covidData: [] } };
  }
}

export default Home;