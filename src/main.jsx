import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Mainlayout';
import Home from './Home';
import Register from './authentication/Register';
import Authprovider from './myauth/Authprovider';
import Login from './authentication/Login';
import Jobdetails from './component/Jobdetails';
import Private from './component/Private';
import Apply from './component/Apply';
import Myapplyjob from './component/Myapplyjob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/jobs/:id',
        element: <Private><Jobdetails></Jobdetails></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/apply/:id',
        element: <Apply></Apply>
      },
      {
        path: 'myapplyjob',
        element: <Private><Myapplyjob></Myapplyjob></Private>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
