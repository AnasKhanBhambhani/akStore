import React from 'react'
import hr from '../../Assets/Icons/hor.png'
const Poster = (props) => {
    return (
        <div className="uper flex justify-center item-center  py-4   mx-auto  relative z-10  " data-aos="flip-left" id={props.id}>
            <div className=' flex flex-col z-10 absolute lg:top-26 md:top-20 sm:top-16 top-12'>

                <h6 className='text-purple-950 text-center font-[600] text-[1.5rem] sm:text-[2rem] gfont md:text-[2.2rem] lg:text-[3.25rem]'>{props.name}</h6>
                {/* <div className="kline bg-white h-[3px] rounded-lg w-20 mx-auto">
                </div> */}
                <img src={hr} alt="horizentol line" className='w-52' />
            </div>
            <h1 className="text-purple-400 text-center opacity-[0.3] font-[600] md:mx-5 text-[3.25rem] sm:text-[5rem] md:text-[6rem] lg:text-[8.25rem]">{props.info}</h1>
        </div>
    )
}

export default Poster



