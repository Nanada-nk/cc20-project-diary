import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className='p-8'>
      <Outlet />
      </div>
      <h1>footer</h1>
    </div>
  )
}

export default MainLayout