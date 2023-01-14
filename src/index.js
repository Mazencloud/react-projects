import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.render(

    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Register' element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>,

  document.getElementById('root')
);