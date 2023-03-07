import React from 'react';
import {setPageCount} from "../../redux/slices/filterSlice";
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={evt => {
        dispatch(setPageCount(evt.selected + 1))
      }}
      pageRangeDisplayed={8}
      pageCount={6}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
