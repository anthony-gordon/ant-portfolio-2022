import "../style/components/Pagination.css";
import { Link } from "react-router-dom";

function Pagination({ postsPerPage, totalPosts }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="Pagination">
      <nav className="Pagination__nav">
        <ul className="Pagination__ul">
          {pageNumbers.map((number) => (
            <li className="Pagination__li" key={number}>
              <Link className="Pagination__link" to={`/artworks/${number}`}>
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
