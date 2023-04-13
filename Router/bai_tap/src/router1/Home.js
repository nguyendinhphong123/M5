import { useParams } from "react-router-dom";

function Home() {
  let { email } = useParams();
  return (
    <div>
      <h3>Bạn đã login thành công</h3>
      <p>Bạn là {email} </p>
    </div>
  );
}
export default Home; 