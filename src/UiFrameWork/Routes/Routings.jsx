import React from 'react'
import Layout from '../../Interfaces/Shared/Layouts/Layout'
import Home from '../../Interfaces/Container/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../../Interfaces/Container/About/About'
import Products from '../../Interfaces/Container/Products/Products'
import Contact from '../../Interfaces/Container/Contact/Contact'
import Product from '../../Interfaces/Container/Products/Product'
import AddToCart from '../../Interfaces/Components/AddToCart'
import Login from '../../Interfaces/Components/Login'
import Protected from '../../Interfaces/Components/Protected'
const Routings = () => (
    <div>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Product />} />
                <Route path='/cart' element={<Protected Component={AddToCart} />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={<Home />} />
            </Routes>
        </Layout>
    </div>
)
export default Routings
