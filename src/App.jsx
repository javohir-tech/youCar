
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

//react-bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//mainLayout
import MainLayout from './Layout/MainLayout';
import { About, Contact, Home, Katalok, News, SingleCar } from './Pages';

//actions
// import { action as HomeAction } from './Pages/Home';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          // action:  HomeAction
        },
        {
          path: "/katalok",
          element: <Katalok />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/news",
          element: <News />
        },
        {
          path: "Contact",
          element: <Contact />
        },
        {
          path: "/singlecar/:id",
          element: <SingleCar />
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
