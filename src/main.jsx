import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Pages/HomePage'
import CoursesPage from './components/Pages/CoursesPage';
import DevOps from "./components/Pages/DevOps"
import Fullstack from './components/Pages/Fullstack';
import SalesForce from './components/Pages/SalesForce';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "courses",
    element: <CoursesPage />,
  },
  {
    path:'courses/fullstack',
    element:<Fullstack/>
  },
  {
    path:'courses/devops',
    element:<DevOps/>
  },
  {
    path:'courses/salesforce',
    element:<SalesForce/>
  },
  {
    path:'about',
    element:<AboutPage />
  },
  {
    path:'contact',
    element:<ContactPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)