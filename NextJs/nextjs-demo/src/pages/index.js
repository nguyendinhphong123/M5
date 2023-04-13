import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

//Controller
// Phương thức getStaticProps có thể được sử dụng bên trong một Page để lấy dữ liệu ngay tại thời điểm xây dựng
export function getStaticProps(context) {
  // fetch dữ liệu từ file system, API, DB,...
  // const data = 

  // Giá trị của `props` sẽ được truyền tới component `Home`
  return {
    props: {
      name: 'NVA',
      age: 18
    }
  }
}

//Phương thức này lấy dữ liệu mỗi khi user gửi request lên hệ thống
/*
export function getStaticProps(context) {
  // fetch dữ liệu từ file system, API, DB,...
  // const data = 

  // Giá trị của `props` sẽ được truyền tới component `Home`
  return {
    props: {
      name: 'NVA',
      age: 18
    }
  }
}
*/
//View
function index(props) {
  console.log(props);
  return (
    <div>
      <Header/>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <h1>Home</h1>
      <Footer/>
    </div>
  );
}

export default index;