
import React from 'react'
import './App.css';
// import Cart from './Component/Cart';
import Payment from './Component/Payment';
import CartStore from './Component/CartStore';
import Header from './Component/Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from './Component/Component_Store/Aside';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
    <div className='gradient-custom'>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route exact path='/' element={<Cart/>} /> */}
          <Route path='/Aside' element={<Aside/>} />
          <Route path='/CartStore' element={<CartStore style={{ backgroundColor: 'lightblue', padding: '10px' }} />} />
          <Route path='/Payment' element={<Payment/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </>
  )
}

export default App

