import React, {useContext} from 'react';
import styles from './search.module.scss';
import {SearchContext} from "../../App";

const Search = () => {
  const {setSearch, setSearchItem} = useContext(SearchContext);

  return (
    <input
      value={setSearch}
      className={styles.search}
      placeholder={'Поиск'}
      onChange={(evt) => setSearchItem(evt.target.value)}
    />
  );
};

export default Search;
