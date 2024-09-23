import { createBrowserRouter } from "react-router-dom";
import AdminIndex from "../layout/admin";
import GeneralIndex from "../layout/general";
import Dashboard from "../layout/admin/Dashboard";
import ManagerProduct from "../layout/admin/ManagerProduct";

const routes =  createBrowserRouter([
    {
        path:"/",
        element: <GeneralIndex/>
    },
    {
        path:"/admin",
        element: <AdminIndex/>,
        children:[
            {
                index:true,
                element: <Dashboard/>
            },
            {
                path:"manager-product",
                element: <ManagerProduct/>
            },
        ]
    },
    {
        path:"/user",
        element: <AdminIndex/>
    },
])

export default routes;