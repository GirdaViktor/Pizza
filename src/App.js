import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {dataSelector, fetchDataItems} from "./Redux/dataSlice";

function App() {
  const { items } = useSelector(dataSelector);
  const dispatch = useDispatch();

  const getData = () => dispatch(fetchDataItems());

  useEffect(() => {
    getData()
  }, []);

  console.log(items);
  return (
    <div className="App">1</div>
  );
}

export default App;
