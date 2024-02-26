import { Link } from "react-router-dom";

const linkStyle = {
  color: "#5743A6",
};
export default function HomePage() {
  return (
    <>
      <h1>TOP TV SHOWS</h1>
      <em> All About The smaller Silver Screen </em>
      <ul>
        <li>
          <Link to="/Shows" style={linkStyle}>
            Explore Shows
          </Link>
        </li>
        <li>
          <Link to="/Search" style={linkStyle}>
            Search For Your Favorite
          </Link>
        </li>
      </ul>
    </>
  );
}
