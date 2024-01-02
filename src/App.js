import { useEffect } from "react";
import { useSelector } from "react-redux";

import { dataSelector, fetchDataItems } from "./Redux/dataSlice";
import {useAppDispatch} from "./Redux/Store";

function App() {
  const { items } = useSelector(dataSelector);
  const dispatch = useAppDispatch();

  const getData = () => dispatch(fetchDataItems());

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(items);
  return (
    <div className="App">1</div>
  );
}

export default App;
