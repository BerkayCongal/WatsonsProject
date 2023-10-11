import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateHeader from './component/Header.jsx'
import About from './component/About/About'
import Container from './component/Container/Container.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <CreateHeader/>,
      children: [
        {
          index: true, element: <Container/>
        },
        {
          path:"/about",
          element: <About/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>






)
