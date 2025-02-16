import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Error from './components/Error';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Grocery from './components/Grocery';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return <div>
        <Header/>
        <Outlet/>
    </div>
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/grocery',
                element: <Grocery/>
            },
            {
                path:'/restaurants/:resId',
                element: <RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)
