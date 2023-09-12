import React from 'react'
import { NavLink} from 'react-router-dom'
import Image from "../assets/images/image-jeremy.png"

export default function Profile() {
  const active = ({isActive}) => isActive ? "active" : ""
  return (
    <div className='profile'>
      <div className='profile-main'>
        <img src={Image} alt="profile image" />
        <div>
          <p>Report for</p>
          <p className='name'>Jeremy Robson</p>
        </div>
      </div>
      <nav className='profile-links'>
        <NavLink to="/daily" className={active}>Daily</NavLink>
        <NavLink to="/weekly" className={active}>Weekly</NavLink>
        <NavLink to="/monthly" className={active}>Monthly</NavLink>
      </nav>
    </div>
  )
}
