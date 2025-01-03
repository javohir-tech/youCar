import React from 'react'
import { NavbarMain } from '../Components'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <NavbarMain />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
