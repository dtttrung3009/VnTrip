import React from 'react';
import './App.css';
import Header from "./Components/Blocks/homes/header/Header";
import Topbar from "./Components/Blocks/homes/topbar/Topbar";
import SearchBar from "./Components/Blocks/homes/search_bar/SearchBar";

function App() {
    return (
        <div className="App">
            <Topbar></Topbar>
            <hr/>
            <Header></Header>
            <SearchBar/>
        </div>
    );
}

export default App;
