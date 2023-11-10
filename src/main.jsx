import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './componets/Roots.jsx';
import Home from './Homepage/Home.jsx';



const router=createBrowserRouter([

{
  path:'/',
  element:<Roots></Roots>,
  children:[
    
     {
      path:'/',
      element:<Home></Home>
     }







  ]
}





])













ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
