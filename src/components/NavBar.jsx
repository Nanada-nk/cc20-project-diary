import React from 'react'
import { NavLink } from 'react-router'

const menu = [
  {id: 1, text: "Home", path: "/"},
  {id: 2, text: "Create Post", path: "/create"},
  {id: 3, text: "Login", path: "/login"},
]

function NavBar() {
  return (
    <nav className="h-14 bg-amber-700 text-white flex items-center justify-center gap-6">
      {menu.map ((item) => (

      <NavLink className="cursor-pointer hover:Underline hover:text-amber-400" 
      to={item.path} key={item.id}>{item.text}</NavLink>
      ))}
    </nav>
  )
}

export default NavBar