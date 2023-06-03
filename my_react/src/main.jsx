import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'
 import Clock from './clock.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";
import Fetch_product from './react_reducx/products.jsx'
import Dashboard from './react_reducx/Dashbord.jsx'
import Cart from './react_reducx/cart.jsx'
import RootLayout from './react_reducx/RootLayout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
 
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Fetch_product /> */}
    {/* <Test /> */}
    {/* <Clock /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
