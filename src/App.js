import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Error from './components/Error';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    //auth code 

    const [userName,setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Akshay"
        }
        setUserName(data.name)
    },[])


    return  <UserContext.Provider value={{ loggedInUser: userName, setUserName }}><div>
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
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
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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
