import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Profile from './Profile'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Profile />
      <Outlet />
    </div>
  )
}
