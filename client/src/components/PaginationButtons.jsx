import React from "react";
import PropTypes from "prop-types";

const PaginationButtons = ({
  countComments,
  pageSize,
  currentPage,
  handlePageBtnClick
}) => {
  const pages = Math.ceil(countComments / pageSize);
  const pagesArr = Array.from(new Array(pages), (_, index) => index + 1);
  return (
    <p className="float-right mt-2">
      {pagesArr.map(num => (
        <button
          key={num}
          className={`btn mx-1 ${
            num === currentPage ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => handlePageBtnClick(num)}
        >
          {num}
        </button>
      ))}
    </p>
  );
};

PaginationButtons.propTypes = {
  countComments: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageBtnClick: PropTypes.func.isRequired
};

export default PaginationButtons;
