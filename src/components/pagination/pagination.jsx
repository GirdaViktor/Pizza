import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import {selectorFilter, setPageCount} from "../../redux/slices/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectorFilter).pageCount;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="->"
      onPageChange={evt => {
        dispatch(setPageCount(evt.selected + 1))
      }}
      pageRangeDisplayed={8}
      pageCount={6}
      previousLabel="<-"
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
