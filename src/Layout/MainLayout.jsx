//comments
import { FooterUnder, NavbarMain } from '../Components'

//react  router dom
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <NavbarMain />
      <main>
        <Outlet />
      </main>
      <FooterUnder/>
    </div>
  )
}
