import React from 'react'

import logo from '../img/logo.png'
import CallToAction from './CallToAction'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <img className="" width="100" src={logo} alt="" />
      <CallToAction/>
    </div>
  )
}
