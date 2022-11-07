/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({ itemsPages, allPokemons, paginated }) => {
  const pagesNumbers = [];

  for (let i = 0; i < Math.ceil(allPokemons / itemsPages); i++) {
    pagesNumbers.push(i + 1);
  }
  return (
    <div className="nav__paginated">
      <nav>
        <ul className="nav__list">
          {pagesNumbers &&
            pagesNumbers.map((num) => (
              <li className="nav__item" key={num}>
                <a className="nav__link" onClick={() => paginated(num)}>{num}</a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
