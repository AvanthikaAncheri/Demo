import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Models/Header'
import Home from './Models/Home'
import Footer from './Models/Footer'
import Login from './Models/Login'
import Product from './Models/Product'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Create from './Models/Create'

function Router() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={
            <>
             <Header/>
             <Home/>
            </>
        }/>
        <Route path='/login' element={
        <>
         <Header/>
         <Login/>

        </>
    }/>
    <Route path='/product' element={
        <>
         <Header/>
         <Product/>
        </>
    }/>
    <Route path='/wishlist' element={
        <>
         <Header/>
         <Wishlist/>
        </>
    }/>
    <Route path='/cart' element={
        <>
         <Header/>
         <Cart/>
        </>
    }/>
    <Route path='/checkout' element={
        <>
         <Header/>
         <Checkout/>
        </>
    }/>
    <Route path='/create' element={
        <>
         <Header/>
         <Create/>
        </>
    }/>
       </Routes>
       </BrowserRouter>   
    </div>
  )
}

export default Router