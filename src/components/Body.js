import React from 'react'
import Login from './Login'
import Browse from './Browse'
import error from './error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const Body = () => {

    const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/error",
            element: <error/>
        }
    ]);


  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  )
}

export default Body;