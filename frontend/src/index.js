import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login/Login';
import reportWebVitals from './reportWebVitals';
import Register from './component/Register/Register';
import Home from './component/Home/Home';
import { UsernameProvider } from './component/Utils/UsernameContext';
import ToAddProduct from './component/ToAddProduct/ToAddProduct';
import Cart from './component/Cart/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <UsernameProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addproduct" element={<ToAddProduct />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        /> */}
      </Routes>
      </UsernameProvider>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
