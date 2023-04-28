import React from "react";
import{orginal,action,horror,comedy} from './urls'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <RowPost url={orginal} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>


    </div>
  );
}

export default App;
