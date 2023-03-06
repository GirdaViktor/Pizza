import React, {useContext} from 'react';
import CardItem from "../cardItem/CardItem";
import ReactPaginate from "react-paginate";
import {SearchContext} from "../../App";

const ContainerItems = ({items, isLoading, setPage}) => {
  const { searchItem } = useContext(SearchContext);

  return (
    <>
      <ul className="content__items">
        {
          isLoading ? <div> 'Идет загрузка'</div> :
          items
            .filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()) ? true : false)
            .map((item) => (<CardItem {...item} key={item.id}/>))
        }
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={evt => {
          console.log(evt);
          setPage(evt.selected + 1)
        }}
        pageRangeDisplayed={8}
        pageCount={6}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default ContainerItems;
