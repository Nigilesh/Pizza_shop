import logo from './logo.svg';
import './App.css';
import AppBar from './Component/Appbar';
import Banner from './Component/Banner';
import Menu from './Component/Menu';
import Pick from './Component/Pick';
import Comment from './Component/Comments';
import PizzaList from './Component/PizzaList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartShow from './Component/CartShow';


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
            {/* <Routes><Route path='/cart' element={<CartShow></CartShow>}></Route></Routes> */}
            <AppBar></AppBar>
            <Banner></Banner>
            {/* <Menu></Menu> */}
            {/* <CartShow></CartShow>  */}
            <PizzaList></PizzaList>
            <Pick></Pick>
            <Comment></Comment>
         
        </Provider>
      </BrowserRouter>
      <div className='text-center py-3 text-primary small'> Copyrights 2010-2023</div>
    </>
  );
}

export default App;
