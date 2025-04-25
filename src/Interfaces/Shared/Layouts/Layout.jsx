import React  from 'react'
import Header from './Header'
import Fotter from './Fotter'
import About from '../../Container/About/About'
const Layout = (props) => {
  return (
    <div>
        <Header/>
      {props.children}
      <Fotter/>
    </div>
  )
}

export default Layout



