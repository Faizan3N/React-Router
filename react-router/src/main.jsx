
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'

import Layout from './Layout.jsx';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        
          path: "",
          element: <Home/>
      },
          {}
      ]
  }
])

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
