import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateHeader from './component/Header.jsx'
import Container from './component/Container/Container.jsx'
import Basket from './component/Basket/Basket.jsx'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Signup from './component/SignUp/Signup.jsx'
import Login from './component/Login/Login.jsx'
import Filter from './component/Filter/Filter.jsx'
import Delivery from './component/delivery/delivery.jsx'
import Account from './component/Myaccount/account.jsx'
import SecoundFilter from './component/Filter/SecondFilter.jsx'
import { createClient } from '@supabase/supabase-js'
import { auth, isSign } from './auth.js'
export  const supabase = createClient("https://yvwzfokjdgcyvyikzzen.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2d3pmb2tqZGdjeXZ5aWt6emVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDkxODk5OSwiZXhwIjoyMDE2NDk0OTk5fQ.0E4nVMsEougVoDWcHppePn7ehMZPv6WgMA4pVmobZd4")
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <CreateHeader/>,
      loader: isSign,
      children: [
        {
          index: true, element: <Container/>,
        },
        {
          path:"/filter/secoundfilter",
          element: <SecoundFilter/>
        },
        {
          path:"/basket",
          element:<Basket/>
        },
        {
          path:"/signup",
          element:<Signup/>,
          loader: auth
        },
        {
          path:"/login",
          element:<Login/>,
          loader: auth
        },
        {
          path:"/filter",
          element: <Filter/>
        },
        {
          path:"/delivery",
          element:<Delivery/>
        },
        {
          path:"/account",
          element:<Account/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
