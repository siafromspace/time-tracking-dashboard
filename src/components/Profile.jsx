import React from 'react'
import { Link} from 'react-router-dom'
import Image from "../assets/images/image-jeremy.png"

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile-main'>
        <img src={Image} alt="profile image" />
        <p>Report for</p>
        <p className='name'>Jeremy Robson</p>
      </div>
      <nav className='profile-links'>
        <Link to="/daily">Daily</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/monthly">Monthly</Link>
      </nav>
    </div>
  )
}
