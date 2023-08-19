
import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './Components/Header';
import Body from './Components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';

const App = () => {
return (
    <div>
        <Header/>
        <Outlet/>
    </div>
)

}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            }
        ]
    }
])





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);