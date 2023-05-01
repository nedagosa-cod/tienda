import React from "react";
import Login from './components/Login.js';
import Home from './components/principalPage/home.js';
import Shopcar from "./components/shopcar/Shopcar.js";
import './style/App.css';
import './style/index.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop_car" element={<Shopcar />} />
      </Routes>
    </div>
  );
}

export default App;
