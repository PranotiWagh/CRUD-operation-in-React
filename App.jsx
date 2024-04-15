import React from "react"
import{RouterProvider,createBrowserRouter} from 'react'
import Layout from './components/Layout'
import CreateUsers from './components/EditUsers'
import EditUsers from './component/EditUsers'
import Users from './component/Users'
const App=()=>{
    let router=createBrowserRouter([
        {
            path: "./",
            element: <CreateUsers/>
        },
        {
            path: "./editusers",
            element: <EditUsers/>

        },
        {
            path: "./datausers",
            elements: <Users/>
        },
    ]
    )
return(
    <RouterProvider router={router}></RouterProvider>
)
}
export default App
