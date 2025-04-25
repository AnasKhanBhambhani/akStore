import starfill from '../../../Assets/Logo/star.png';
import star from '../../../Assets/Logo/star (1).png';
import checkmark from '../../../Assets/Logo/checkmark.png';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, resetProduct } from '../../../Usecases/Slices/ProductByIdSlice';
import spinner from '../../../Assets/Logo/circle-9360_256.gif'
import { useNavigate, useParams } from 'react-router-dom';
import { AddToCartReducer, getCartQuantity, updateSummary } from '../../../Usecases/Slices/AddToCartSlice';
const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [proquantity, setProquantity] = useState(1);
    const product = useSelector(state => state.myProduct.items);
    const isloading = useSelector(state => state.myProduct.status);
    const firstName = localStorage.getItem('firstName');
    useEffect(() => {
        if (id) {
            window.scrollTo(0, 0)
            dispatch(fetchProduct({ id: parseInt(id) }));
        }
        return () => {
            dispatch(resetProduct())
        }
    }, [id, dispatch]);
    const handleIncrement = (count) => {
        setProquantity(proquantity + count)

    };
    const addToCart = (title, price, thumbnail, quantitty) => {
        const cartItem = {
            title,
            price: price,
            thumbnail,
            quantity: quantitty,
            id: parseInt(id),
        };
        const summaryData = {
            shipping: 2,
            tax: 4,
        }
        if (firstName) {
            navigate('/cart');
            dispatch(AddToCartReducer(cartItem));
            dispatch(updateSummary(summaryData));
            dispatch(getCartQuantity());
        }
        else {
            dispatch(AddToCartReducer(cartItem));
            dispatch(updateSummary(summaryData));
            dispatch(getCartQuantity());
            navigate('/login')
        }


    }

    return (
        <>
            {isloading == 'loading' ? <div className=' flex rounded-lg my-4 justify-center items-center w-[90vw] h-[100vh] mx-auto bg-violet-200 container'><img src={spinner} alt="" className='w-12' /></div> :
                <div className="font-sans tracking-wide mx-auto p-3 md:p-6 rounded-lg  md:w-[90vw] container my-4 bg-violet-200">
                    <div data-aos="zoom-out" className="bg-violet-200   md:min-h-[600px] rounded-lg grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2">
                        <div className="lg:col-span-3  p-8">
                            <div className="relative flex items-center justify-center md:min-h-[580px]">
                                <img src={product.thumbnail} alt="" className='' />
                            </div>
                        </div>
                        <div className="lg:col-span-2 rounded-r-lg bg-violet-200 py-6 px-8 h-full">
                            <div>
                                <div className="font-[sans-serif] space-x-6 flex mt-4">
                                    <span className="bg-blue-600 px-2 py-1 text-xs text-white rounded">{product.category}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>

                                <div className="flex space-x-1 mt-2">
                                    <img src={starfill} alt="starfill" className='w-6' />
                                    <img src={starfill} alt="starfill" className='w-6' />
                                    <img src={starfill} alt="starfill" className='w-6' />
                                    <img src={starfill} alt="starfill" className='w-6' />
                                    <img src={star} alt="" className='w-6' />
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-bold text-gray-800">Price</h3>
                                <p className="text-gray-800 text-3xl font-bold mt-4">{product.price} $</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
                                <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
                                    <button disabled={proquantity <= 1} onClick={() => { handleIncrement(-1) }} type="button" className="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center">
                                        -
                                    </button>
                                    <h1 className="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg">
                                        {proquantity}
                                    </h1>
                                    <button onClick={() => { handleIncrement(1) }} type="button" className="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8">

                                <button onClick={() => { addToCart(product.title, product.price, product.thumbnail, proquantity) }} className="bg-transparent text-purple-950 font-bold py-2 my-4 px-4 rounded border border-black bg-fill-animation hover:text-white">
                                    Add To Cart
                                </button>
                            </div>


                        </div>
                    </div>

                    <div className="mt-8 max-w-2xl px-6">
                        <h3 className="text-lg font-bold text-gray-800">{product.title} Features</h3>

                        <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                            <li className="flex items-center text-sm gap-2 text-gray-600">
                                <img src={checkmark} alt="checkmark" className='w-6' />
                                {product.availabilityStatus}
                            </li>
                            <li className="flex items-center text-sm gap-2 text-gray-600">
                                <img src={checkmark} alt="checkmark" className='w-6' />
                                discountPercentage: {product.discountPercentage} %

                            </li>
                            <li className="flex items-center text-sm gap-2 text-gray-600">
                                <img src={checkmark} alt="checkmark" className='w-6' />
                                minimumOrderQuantity: {product.minimumOrderQuantity}
                            </li>
                            <li className="flex items-center text-sm gap-2 text-gray-600">
                                <img src={checkmark} alt="checkmark" className='w-6' />
                                returnPolicy: {product.returnPolicy}
                            </li>
                            <li className="flex items-center text-sm gap-2 text-gray-600">
                                <img src={checkmark} alt="checkmark" className='w-6' />
                                shippingInformation: {product.shippingInformation}
                            </li>
                            <li className="flex items-center text-sm gap-2 text-gray-600">
                                <img src={checkmark} alt="checkmark" className='w-6' />
                                stock: {product.stock}
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
                            <p className="text-sm text-gray-600 mt-4">{product.description}</p>
                        </div>
                    </div>


                </div>
                
                }
        </>

    )
}

export default Product
