import React, { Component } from 'react'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Portofolio from './components/Portofolio/Portofolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'









let routers = createBrowserRouter([{

    path: "", element: <Layout />, children: [

        { path: `/`, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'portofolio', element: <Portofolio /> }
    ]
}])



export default class App extends Component {
    render() {
        return (
            <RouterProvider router={routers} >

            </RouterProvider>
        )
    }
}
