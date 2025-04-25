import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cart from '../../../Assets/Logo/shopping-cart (1).png';
import cross from '../../../Assets/Logo/close.png';
import menu from '../../../Assets/Logo/hamburger.png';
import { setToggleOff, setToggleOn } from '../../../Usecases/Slices/ToggleSlices';
import { NavLink, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { persistor } from '../../../Usecases/Store'
import { logout } from '../../../Usecases/Slices/LoginSlice';
import { clearCart } from '../../../Usecases/Slices/AddToCartSlice';
AOS.init();

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state => state.toggle);
  const cartCount = useSelector(state => state.AddToCart.totalCarts);
  const user = useSelector(state => state.LogIn.user);
  const name = user?.firstName + ' ' + user?.lastName;
  // const [currentstate,setCurrentstate] = useState('login')
  const firstName = JSON.parse(localStorage.getItem('firstName'));
  const handleLogin = () => {
    if (user) {
      // setCurrentstate('login')
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
      dispatch(logout())
      dispatch(clearCart());
      navigate('/')
      if (persistor && typeof persistor.purge === 'function') {
        persistor.purge();
      } else {
        console.error('Persistor is not defined or does not have a purge method');
      }

    }
    else {
      navigate('/login')
    }
  }
  useEffect(() => {

    const handleScroll = () => {
      if (data.isToggleOn) {
        dispatch(setToggleOff());
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.isToggleOn, user])

  return (
    <div className='bg-violet-200 shadow-xl mt-2  lg:w-[90vw] rounded-full flex items-center justify-between md:justify-between py-2  lg:container mx-auto'>

      <div className='hamBuger md:hidden mx-3'>
        <img src={menu} alt="menu" className='w-6 h-6' onClick={() => dispatch(setToggleOn())} />
      </div>

      <div className='leftNav flex items-center gap-8 ml-3'>

        <NavLink to='/'>
          <div className="logo   flex gap-2 text-xl cursor-pointer items-center rounded-full py-1 px-3" data-aos="flip-left">
            <div>
              <h1 className='bg-purple-950 rounded-3xl text-white p-1 h-8 w-8  '>AK</h1>
            </div>
            <div>
              <h1 className='text-black font-bold font-sans'>Store</h1>
            </div>
          </div>
        </NavLink>
      </div>
      <div className={`center flex flex-col items-center justify-center gap-7 ${data.isToggleOn ? 'z-50 transition-all duration-700 ease-in-out absolute top-0 left-0 w-[80vw] h-full bg-gray-300' : 'hidden md:flex md:flex-col md:relative md:gap-3'}`}>
        <div className={`${data.isToggleOn ? 'flex' : 'hidden'}`} onClick={() => dispatch(setToggleOff())}>
          <img src={cross} alt="close" className='w-5 absolute top-5 right-5 ' />
        </div>

        <div className={`NavList flex list-none gap-3 items-center justify-center ${data.isToggleOn ? 'flex-col ' : 'flex-row'}`}>
          <li className='relative px-4 py-2 rounded cursor-pointer group hover:text-slate-600' data-aos="flip-left" >
            <NavLink onClick={() => { dispatch(setToggleOff()) }} to='/'  >Home</NavLink>
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-950 transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative px-4 py-2 rounded cursor-pointer group hover:text-slate-600' data-aos="flip-left">
            <NavLink onClick={() => { dispatch(setToggleOff()) }} to='/about' >About</NavLink>
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-950  transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative px-4 py-2 rounded cursor-pointer group hover:text-slate-600' data-aos="flip-left">
            <NavLink onClick={() => { dispatch(setToggleOff()) }} to='/products' >Products</NavLink>
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-950  transition-all duration-300 group-hover:w-full'></span>
          </li>

          <li className='relative px-4 py-2 rounded cursor-pointer group hover:text-slate-600' data-aos="flip-left">
            <NavLink onClick={() => { dispatch(setToggleOff()) }} to='/contact' >Contact</NavLink>
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-950  transition-all duration-300 group-hover:w-full'></span>
          </li>
        </div>
      </div>
      <div className='flex gap-4'>
        <button onClick={handleLogin} className='bg-purple-950 px-4 py-1 rounded-lg text-white hover:bg-purple-800' title='LogOut' >{user?.firstName ? name : 'login'}</button>
        <button type='button' onClick={() => { navigate('/cart') }} className="relative right flex items-center gap-3 mr-4">
          <img src={cart} alt="cart" className='w-9 cursor-pointer ' data-aos="flip-left" />
          {firstName && cartCount ? <h1 className='absolute -top-1 -right-2 bg-purple-950 text-white w-6 h-6 rounded-2xl'>{cartCount}</h1> : null}
        </button>
      </div>

    </div>
  );
}

export default Header;
