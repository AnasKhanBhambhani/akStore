import React from 'react'
import aboutPic from '../../Assets/imges/anas clip art 3-10.jpg';
import { useNavigate } from 'react-router-dom';

const AboutBanner = () => {
    const navigate = useNavigate();


    return (
        <div className="grid md:grid-cols-2  lg:grid-cols-3 my-4 items-center bg-violet-200 container md:w-[90vw] rounded-lg mx-auto">
            <div className="lg:col-span-2  p-10">
                <h1 className="text-3xl font-bold text-purple-950" data-aos="fade-right">Redefining online shopping with a blend of quality, innovation, and exceptional service.</h1>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed break-words">At AK Store, our mission is to provide top-quality products with exceptional service. We are dedicated to delivering an outstanding shopping experience and bringing you the best in fashion, electronics, home goods, and more. Our team works tirelessly to curate a selection of products that cater to your needs and preferences.</p>
                <button onClick={() => { navigate('/products') }} className="bg-transparent text-purple-950 font-bold py-2 my-4 px-4 rounded border border-black bg-fill-animation hover:text-white">
                    Shop Now
                </button>
            </div>
            <img src={aboutPic} className=" mix-blend-darken" data-aos="fade-left" />
        </div>
    )
}

export default AboutBanner
