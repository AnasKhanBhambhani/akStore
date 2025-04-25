import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import deletePng from '../../Assets/Icons/delete (1).png'
import ProductNotFound from '../Container/Products/ProductNotFound';
import { useNavigate } from 'react-router-dom';
import { AddToCartReducer, clearCart, getCartQuantity, removeItemFromCart, updateItemQuantity, updateSummary } from '../../Usecases/Slices/AddToCartSlice';
import { persistor } from '../../Usecases/Store';
import { debounce } from 'lodash';
const AddToCart = () => {
    const cart = useSelector(state => state.AddToCart.addToCartData) || [];
    const sumarry = useSelector(state => state.AddToCart.orderSummary) || {};
    const totalPrice = parseFloat(sumarry.tax) + parseFloat(sumarry.shipping) + parseFloat(sumarry.subtotal) || 0;
    const totalCart = useSelector(state => state.AddToCart.totalCarts) || 0;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleProductCount = (id, quantity, increment) => {
        const cartItem = {
            id,
            quantity,
            increment,
        };
        const summaryData = {
            shipping: 2,
            tax: 4,
        }
        dispatch(updateItemQuantity(cartItem))
        dispatch(updateSummary(summaryData));
        dispatch(getCartQuantity());
    }
    const handleCheckout = () => {
        notify();
        setTimeout(() => {
            dispatch(clearCart());
            persistor.purge();
            navigate('/products')
        }, 2000);
    }
    const notify = () => toast("Thank You For Shopping...");
    return (
        <div className="font-sans my-4 max-w-5xl max-md:max-w-xl mx-auto rounded-lg bg-violet-200 p-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="md:col-span-2 space-y-1">
                    {cart == '' && <ProductNotFound title='Empty Cart' />}
                    {cart?.map((cartData) => (
                        <>
                            <div key={cartData.id} data-aos="fade-up"
                                className="grid grid-cols-3 rounded-lg items-start gap-4 p-3 bg-white">
                                <div className="col-span-2 flex items-start gap-4">
                                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                                        <img src={cartData.thumbnail} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-bold text-gray-800">{cartData.title}</h3>
                                        <button
                                            type="button"
                                            onClick={() => { dispatch(removeItemFromCart(cartData.id)) }}
                                            className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0">
                                            <img src={deletePng} alt="deletePng" className='w-6' />
                                            REMOVE
                                        </button>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-lg max-sm:text-base font-bold text-gray-800">{cartData.price.toFixed(2)} $</h4>
                                    <div
                                        className="mt-6 justify-evenly flex items-center px-2   py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                        <button
                                            type='button'
                                            disabled={cartData.quantity == 1}
                                            onClick={() => { handleProductCount(cartData.id, cartData.quantity, -1) }}
                                            className='font-extrabold text-lg text-white rounded-md bg-purple-950 px-2'>-</button>
                                        <span className="mx-3  font-bold"> {cartData.quantity}</span>
                                        <button
                                            type='button'
                                            onClick={() => { handleProductCount(cartData.id, cartData.quantity, 1) }}
                                            className='font-extrabold text-lg text-white rounded-md bg-purple-950 px-2'>+</button>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-gray-300" />
                        </>
                    ))}
                </div>
                <div className="bg-gray-100 rounded-md p-4 h-max">
                    <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>
                    <ul className="text-gray-800 mt-6 space-y-3">
                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">{sumarry.subtotal} $</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">{sumarry.shipping} $</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">{sumarry.tax} $</span></li>
                        <hr className="border-gray-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">{totalPrice} $</span></li>
                    </ul>
                    <div className="mt-6 space-y-3">
                        <button onClick={handleCheckout} disabled={totalCart == ''} type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Checkout</button>
                        <ToastContainer autoClose={1000} />
                        <button onClick={() => { navigate('/products') }} className="bg-transparent text-purple-950 fext-sm px-4 py-2.5 w-full rounded border border-black bg-fill-animation hover:text-white">
                            Continue Shoping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCart
