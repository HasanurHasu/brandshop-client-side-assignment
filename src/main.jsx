import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import BrandDetails from './Pages/BrandDetails';
import AddProduct from './Pages/AddProduct';
import Provider from './Provider/Provider';
import ProductsDetails from './Pages/ProductsDetails';
import UpdateProduct from './Pages/UpdateProduct';
import AddToCard from './Pages/AddToCard';
import PrivateRoute from './Pages/Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/brandDetails/:id',
        element: <BrandDetails></BrandDetails>
      },
      {
        path: '/addProducts',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>
      },
      {
        path: 'productUpdate/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      },
      {
        path: 'myCard',
        element: <PrivateRoute><AddToCard></AddToCard></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
