import React from 'react'
import delievery from '../../Assets/Logo/shipped.png'
import verify from '../../Assets/Logo/verified.png'
import moneyback from '../../Assets/Logo/money-back.png'
import payment from '../../Assets/Logo/payment-services.png'


const Features = () => {
    return (
        <div className="container mx-auto md:w-[90vw]   rounded-lg grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 py-3 my-6 bg-violet-200 ">
            <div className="bg-gray-100 p-2 justify-center items-center rounded-md flex flex-col gap-6"  data-aos="fade-right">
                <img src={delievery} alt="" className='w-8' />
                <h3 className="text-lg font-bold mb-2 text-purple-950">Super Fast and free delievery</h3>
            </div>
            <div className='flex flex-col gap-5'>
                <div className="bg-gray-100 p-2 justify-center items-center rounded-md flex flex-col gap-6" data-aos="fade-down">
                    <img src={verify} alt="verify" className='w-7' />
                    <h3 className="text-lg font-bold mb-2 text-purple-950">Support</h3>
                </div>
                <div className="bg-gray-100 p-2 justify-center items-center rounded-md flex flex-col gap-6" data-aos="fade-up">
                    <img src={moneyback} alt="moneyback" className='w-7' />
                    <h3 className="text-lg font-bold mb-2 text-purple-950">Performance</h3>
                </div>
            </div>
            <div className="bg-gray-100 p-2 justify-center items-center rounded-md flex flex-col gap-6"   data-aos="fade-left">
               <img src={payment} alt="payment" className='w-7' />
                <h3 className="text-lg font-bold mb-2 text-purple-950">Security</h3>
            </div>
        </div>

    )
}

export default Features
