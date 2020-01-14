import React from 'react';
import './App.css';
import Header from "./Components/Blocks/homes/header/Header";
import Topbar from "./Components/Blocks/homes/topbar/Topbar";
import SearchBar from "./Components/Blocks/homes/search_bar/SearchBar";
import About from "./Components/Blocks/homes/about/About";
import LocalFamous from "./Components/Blocks/homes/local_famous/LocalFamous";
import InternationalFamous from "./Components/Blocks/homes/international_famous/InternationalFamous";
import Footer from "./Components/Blocks/homes/footer/Footer";

function App() {
    return (
        <div className="App">
            <Topbar></Topbar>
            <hr/>
            <Header></Header>
            <SearchBar/>
            <div style={{backgroundColor:'#f1f1f1'}}>
            <About/>
            <LocalFamous/>
            <InternationalFamous/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
