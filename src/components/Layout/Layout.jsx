import React from 'react'
import Navbar from '../NavBar/Navbar'
import Fotter from '../Footer/Fotter'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet> </Outlet> 

      <Fotter />
    </>
  )
}
