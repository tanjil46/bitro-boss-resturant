import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './componets/Roots.jsx';
import Home from './Homepage/Home.jsx';

import {HelmetProvider } from 'react-helmet-async';
import Foodmenus from './Foodmenupages/Foodmenus.jsx';
import Ordermenu from './Order/Ordermenu.jsx';
import LOgin from './componets/LOgin.jsx';

import Resister from './componets/Resister.jsx';
import AuthProvider from './componets/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider
 
} from '@tanstack/react-query'
import Dashboard from './componets/Dashboard.jsx';
import Mycart from './Dasboards/Mycart.jsx';
import PrivateRoute from './componets/PrivateRoute.jsx';
import Users from './Dasboards/Users/Users.jsx';
const queryClient = new QueryClient()
const router=createBrowserRouter([

{
  path:'/',
  element:<Roots></Roots>,
  children:[
    
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/menu',
      element:<Foodmenus></Foodmenus>
     },
     {
      path:'/order',
      element:<PrivateRoute><Ordermenu></Ordermenu></PrivateRoute>
     },
     {
      path:'/login',
      element:<LOgin></LOgin>
     },
     
     {
      path:'/resister',
      element:<Resister></Resister>
     },
   






  ]
},
{

   path:'dash',
   element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
   children:[
     {
      path:'mycart',
      element:<Mycart></Mycart>
     },
     {
      path:'users',
      element:<Users></Users>
     }





   ]






}





])













ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>


   <QueryClientProvider client={queryClient}>
     



   <HelmetProvider>
   <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router}></RouterProvider>
    </div>
   </HelmetProvider>

    </QueryClientProvider>



   </AuthProvider>
  </React.StrictMode>,
)
