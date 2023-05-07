import React from "react";
import SignIn from './components/Login.js';
import SignUp from "./components/SignUp.js";
import Home from './components/principalPage/home.js';
import Shopcar from "./components/shopcar/Shopcar.js";
import Checkout from "./components/checkOutForm/Checkout.js";

import './style/App.css';
import './style/index.css';
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer.js";

import { useStateValue } from "./stateProvider.js";
import { actionTypes } from "./reducer.js";
import { auth } from "./firebase.js";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  // eslint-disable-next-line
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser.email) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser.email,
        })
      }
    })
    // eslint-disable-next-line
    },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/sign" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop_car" element={<Shopcar />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
