import { useEffect } from "react";
import { useSelector } from "react-redux";

import './app.css';

import { dataSelector, fetchDataItems } from "./Redux/dataSlice";
import {useAppDispatch} from "./Redux/Store";
import RouteComponent from "./Components/RouteComponent/RouteComponent";

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
    <div className="wrapper">
      <RouteComponent />
    </div>
  );
}

export default App;
