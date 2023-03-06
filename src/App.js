import React, {useState} from "react";
import './scss/app.scss';
import Header from "./components/header/Header";
import MainComponent from "./components/mainComponent/MainComponent";

export const SearchContext = React.createContext('');

function App() {
  const [searchItem, setSearchItem] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{searchItem, setSearchItem}}>
          <Header />
          <MainComponent />
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
