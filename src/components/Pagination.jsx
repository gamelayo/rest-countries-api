import React, { useState } from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  countryPerPage,
  totalCountries,
}) => {
  const pageNumbers = [];
  const totalPages = totalCountries / countryPerPage;

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //   Move to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    // Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  // Move to prev page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show Pre set of pageNumber
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  for (let i = 1; i <= Math.ceil(totalCountries / countryPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="flex items-center justify-center py-4 bg-primary">
      <li
        onClick={paginatePrev}
        className={
          currentPage === pageNumbers[0]
            ? "hidden cursor-pointer text-blue-600"
            : "cursor-pointer text-blue-600"
        }
      >
        prev
      </li>
      <p className="px-3">
        <>{`page ${currentPage}`}</>
        <span>{` of `}</span>
        <>{`${Math.ceil(totalPages)}`}</>
      </p>

      <li
        onClick={paginateNext}
        className={
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? "hidden cursor-pointer text-blue-600"
            : "cursor-pointer text-blue-600"
        }
      >
        next
      </li>
    </ul>
  );
};

export default Pagination;
