
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

//react-bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//mainLayout
import MainLayout from './Layout/MainLayout';
import { About, Contact, Home, Katalok, News } from './Pages';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path:"/katalok",
          element:<Katalok/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/news",
          element:<News/>
        },
        {
          path:"Contact",
          element:<Contact/>
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
