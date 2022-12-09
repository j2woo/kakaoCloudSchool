import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">고양이는 야옹야옹</Link>
      </li>
      <li>
        <Link to="/articles/2">냐옹이는 냐옹냐옹</Link>
      </li>
    </ul>
  );
};

export default Articles;
