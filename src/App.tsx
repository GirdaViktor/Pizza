import { useEffect } from "react";

import { fetchDataItems } from "./Redux/dataSlice";
import { useAppDispatch } from "./Redux/Store";
import RouteComponent from "./Components/RouteComponent/RouteComponent";

import './app.css';

function App() {
  const dispatch = useAppDispatch();

  const getData = () => dispatch(fetchDataItems());

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <RouteComponent />
    </div>
  );
}

export default App;
