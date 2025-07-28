import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Homelayout from './Components/Homelayout.jsx';
import Home from './Components/Home.jsx';
import ScrollProvider from './Components/ScrollProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Homelayout,
    children:[
      {
      path:'/',
      index:true,
      Component:Home
    },
    {
      
    }
  ]
  },
]);
createRoot(document.getElementById('root')).render(
  <ScrollProvider>
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
  </ScrollProvider>,
 
)
