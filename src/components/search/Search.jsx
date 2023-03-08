import React, {useCallback, useContext, useRef, useState} from 'react';
import styles from './search.module.scss';
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce';

const Search = () => {
  const [value, setValue] = useState('');
  const {searchItem, setSearchItem} = useContext(SearchContext);
  const inputRef = useRef();

  const updateSearchValue = useCallback(debounce((str)=> {
    setSearchItem(str);
    }, 500), []);

  const onChangeInput = (evt) => {
    setValue(evt.target.value);
    updateSearchValue(evt.target.value);
  };

  const onClickClear = () => {
    setSearchItem('');
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        className={styles.search}
        placeholder={'Поиск'}
        onChange={onChangeInput}
      />
      { searchItem ? (<button
        onClick={onClickClear}
      >x</button>) : ''}
    </div>
  );
};

export default Search;
