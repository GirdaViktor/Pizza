import React from 'react';
import {setPageCount} from "../../redux/slices/filterSlice";
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.filter.pageCount);

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
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
