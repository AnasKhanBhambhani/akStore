import React from 'react'
import Poster from './Poster';

const ContactForm = () => {
    return (
        <div className='container  md:w-[90vw] mx-auto  bg-violet-200  rounded-lg my-4'>
            <div>
                <Poster name="Contact" info="Us" />
            </div>
            <form className="max-w-md mx-auto flex flex-col p-5  space-y-2  rounded-lg  text-[#333] ">
                <input type="email" placeholder="Enter Email"
                    className="px-4 py-3 focus:bg-transparent w-full border border-purple-950 text-sm outline-purple-950 rounded-sm transition-all" />

                <input type="password" placeholder="Enter Password"
                    className="px-4 py-3  focus:bg-transparent w-full border border-purple-950 text-sm outline-purple-950 rounded-sm transition-all" />
                <textarea placeholder='Type Message'
                    className="p-4 bg-white max-w-md border border-purple-950 mx-auto w-full block text-sm  outline-purple-950 rounded" rows="4">
                </textarea>

                <div className='text-center'>
                <button  className="bg-transparent text-purple-950 font-bold py-2  px-4 rounded border border-purple-950 bg-fill-animation hover:text-white">
                 Submitt
             </button>

                </div>
            </form>
        </div>
    )
}

export default ContactForm
