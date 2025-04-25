import React from 'react'
import banner from '../../Assets/imges/finalbanner.jpeg';
import { useNavigate } from 'react-router-dom';
import button from '../../Assets/imges/button.png'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <>

            <div className='my-8 md:w-[90vw]  rounded-lg  container overflow-hidden  mx-auto bg-violet-200 -z-10'>
                <div className="grid  lg:grid-cols-2  bg-violet-200 rounded-3xl  items-center lg:gap-y-6 bg-grey-200">
                    <div className="max-lg:order-1 max-md:text-center max-lg:text-center sm:p-12 p-4" data-aos="flip-up">
                        <h1 className='text-2xl'>Welcome to the <br /> <span className=' text-purple-950  md:text-5xl text-4xl font-bold lg:!leading-[56px]'>AK Store</span></h1>
                        <p className="text-gray-800 mt-6 text-base leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                        <button onClick={() => { navigate('/product') }} className="bg-transparent text-purple-950 font-bold py-2 my-4 px-4 rounded border border-black bg-fill-animation hover:text-white">
                            Shop Now
                        </button>
                    </div>

                    <div className="lg:h-[480px] flex items-center" data-aos="flip-up">
                        <img src={banner} className="w-full h-full -z-10 rounded-r-lg" alt="Dining Experience" />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Banner
