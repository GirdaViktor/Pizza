import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from "react-redux";
import { selectorFilter, setSearchValue } from "../../redux/slices/filterSlice";
import styles from './search.module.scss';


const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const searchItem = useSelector(selectorFilter).searchValue;
  const inputRef = useRef();

  const updateSearchValue = useCallback(debounce((str)=> {
    dispatch(setSearchValue(str));
    }, 500), []);

  const onChangeInput = (evt) => {
    setValue(evt.target.value);
    updateSearchValue(evt.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
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
