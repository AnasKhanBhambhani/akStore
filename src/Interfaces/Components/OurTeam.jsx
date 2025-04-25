import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../Assets/Logo/facebook-app-symbol.png';
import twitter from '../../Assets/Logo/twitter.png';
import message from '../../Assets/Logo/message.png';
import simon from '../../Assets/imges/team-3.webp';
import john from '../../Assets/imges/team-1.webp';
import middle from '../../Assets/imges/team-2.webp';
import Poster from '../Components/Poster.jsx';
const OurTeam = () => {
    return (
        <div className=" bg-violet-200 container md:w-[90vw] rounded-lg  mx-auto  sm:px-12 lg:px-12 py-8 my-2 about-banner">
            <div className=''>
                <Poster name="Meet The" info="TEAM" />
            </div>
            <div className='team '>
                <div className="max-w-5xl max-lg:max-w-2xl max-sm:max-w-sm mx-auto">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-8 max-sm:justify-center text-center my-12">
                        <div data-aos="zoom-in" className="bg-white rounded-lg shadow-2xl overflow-hidden hover:scale-[1.02] transition-all">
                            <div className="bg-violet-200 h-32"></div>
                            <img src={john} className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />
                            <div className="p-6">
                                <h4 className="text-gray-800 text-base font-extrabold">John Doe</h4>
                                <p className="text-gray-600 text-xs mt-1">Founder & CEO</p>
                                <p className="text-gray-600 mt-4 text-sm">Innovator and leader driving our mission with a vision for exceptional online shopping.</p>

                                <div className="space-x-4 mt-6">
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.facebook.com' target='_blank'>
                                            <img src={fb} alt="facebook" className='w-4' />
                                        </Link>
                                    </button>
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.twitter.com' target='_blank'>
                                            <img src={twitter} alt="twitter" className='w-4' />
                                        </Link>

                                    </button>
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.linkedin.com' target='_blank'>
                                            <img src={message} alt="message" className='w-4' />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="bg-white rounded-lg shadow-2xl overflow-hidden hover:scale-[1.02] transition-all">
                            <div className="bg-violet-200 h-32"></div>
                            <img src={middle} className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                            <div className="p-6">
                                <h4 className="text-gray-800 text-base font-extrabold">Mark Adair</h4>
                                <p className="text-gray-600 text-xs mt-1">Chief Operating Officer</p>
                                <p className="text-gray-600 mt-4 text-sm">Ensures seamless operations and top-notch service with precision and care.</p>

                                <div className="space-x-4 mt-6">
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.facebook.com' target='_blank'>
                                            <img src={fb} alt="facebook" className='w-4' />
                                        </Link>

                                    </button>
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.twitter.com' target='_blank'>
                                            <img src={twitter} alt="twitter" className='w-4' />
                                        </Link>
                                    </button>
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.linkedin.com' target='_blank'>
                                            <img src={message} alt="message" className='w-4' />
                                        </Link>

                                    </button>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="bg-white rounded-lg shadow-2xl overflow-hidden hover:scale-[1.02] transition-all">
                            <div className="bg-violet-200 h-32"></div>
                            <img src={simon} className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block" />

                            <div className="p-6">
                                <h4 className="text-gray-800 text-base font-extrabold">Simon Konecki</h4>
                                <p className="text-gray-600 text-xs mt-1">Creative Director</p>
                                <p className="text-gray-600 mt-4 text-sm">Crafts compelling campaigns and designs that bring our brand’s story to life.</p>

                                <div className="space-x-4 mt-6">
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.facebook.com' target='_blank'>
                                            <img src={fb} alt="facebook" className='w-4' />
                                        </Link>
                                    </button>
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.twitter.com' target='_blank'>
                                            <img src={twitter} alt="twitter" className='w-4' />
                                        </Link>

                                    </button>
                                    <button type="button"
                                        data-aos="flip-left"
                                        className="w-4 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                                        <Link to='https://www.linkedin.com' target='_blank'>
                                            <img src={message} alt="message" className='w-4' />
                                        </Link>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OurTeam
