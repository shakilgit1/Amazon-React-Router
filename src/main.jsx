import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import HomePage from './Components/HomePage/HomePage'
import Products from './Components/Products/Products'
import Contact from './Components/Contact us/Contact'
import Details from './Components/ProductDetails/Details'


const myCreatRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader:()=> fetch(`https://dummyjson.com/products`)
      },
      {
        path:'/products/:id',
        element: <Details></Details>,
        loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
      },

      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatRouter}></RouterProvider>
  </React.StrictMode>,
)
