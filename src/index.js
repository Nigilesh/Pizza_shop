import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductList from './Personal/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from './Compo/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Compo/Home';
import PizzaList from './Compo/Menu';
import Pick from './Compo/Pick';
import Comment from './Compo/Contact';
import Cart from './Compo/Cart';
import Checkout from './Compo/CheckOut';
import Login from './Compo/Login';
import Register from './Compo/Register';
import PizzaDetails from './Compo/PizzaDetials';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/menu" element={<PizzaList></PizzaList>} />
          <Route path="/musttry" element={<Pick></Pick>} />
          <Route path="/contact" element={<Comment></Comment>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/checkout" element={<Checkout></Checkout>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/product/:id" element={<PizzaDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
