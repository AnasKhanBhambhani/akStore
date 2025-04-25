import React from 'react'
const Fotter = () => {
    return (
        <>
      <footer className="container rounded-3xl mx-auto  bg-violet-200 text-black py-5 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose">© 2023<a href='https://readymadeui.com/' target='_blank'
          className="hover:underline mx-1">ReadymadeUI</a>All Rights Reserved.</p>

        <ul className="flex space-x-6 gap-y-2  max-lg:justify-center  flex-wrap">
          <li><a href="javascript:void(0)" className="text-[15px] hover:text-gray-700">Terms of Service</a></li>
          <li><a href="javascript:void(0)" className="text-[15px] hover:text-gray-700">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" className="text-[15px] hover:text-gray-700">Contact</a></li>
        </ul>
      </div>
    </footer>
        </>

    )
}

export default Fotter
