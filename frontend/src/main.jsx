import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css"
import App from './App'
import About from './Pages/About'
import Admin from './Pages/admin'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Index from './Pages/Index'
import Login from './Pages/Login'
import RentalCart from './Pages/RentalCart'
import RentalForm from './Pages/RentalForm'
import Services from './Pages/Services'
import Signup from './Pages/Signup'
import AllUser from './Pages/UserDetail'
import AdminLayout from './layout/AdminLayout'
import Bookings from './Pages/Bookings'
import AddCar from './Pages/AddCar'
import AllCarList from './Pages/AllCarList'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/", element:<Index />},
      {path:"/about", element:<About />},
      {path:"/login", element:<Login />},
      {path:"/signup", element:<Signup />},
      {path:"/service",element:<Services/>},
      {path:"/blog",element:<Blog/>},
      {path:"/contact",element:<Contact/>},
      {path:"/rentalForm",element:<RentalForm />},
      {path:"/rentalCart",element:<RentalCart/>},
      {path:"/rentcart"},
      {path:"/bookcart"},
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      // { index: true, element: <Admin /> },
      // {path:"clients",element:<AllUser/>}
      {path:"/admin", element:<Admin />},
      {path:"clients", element:<AllUser />},
      {path:"bookings", element:<Bookings />},
      {path:"addcar", element:<AddCar />},
      {path:"allcars", element:<AllCarList />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
