import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Page from "../components/Page.jsx";
import CourseDetail from "../components/CourseDetail.jsx";
import ListCource from "../components/ListCource.jsx";
import NotFound from "../components/NotFound.jsx";
import AdminIndex from "../components/AdminIndex.jsx";
import ManagerUser from "../components/ManagerUser.jsx";
import ManagerProduct from "../components/ManagerProduct.jsx";
import DashBoard from "../components/DashBoard.jsx";

const routers = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/page",
        element: <Page/>
      },
      {
        path:"/list-cource",
        element: <ListCource/>
      },
      {
        path:"/course-detail/:id",
        element: <CourseDetail/>
      },
      {
        path:"*",
        element:<NotFound/>,
      },
      {
        path:"/admin",
        element:<AdminIndex/>,
        children:[
          {
            // index default first page
            index: true,
            element: <DashBoard/>
          },
          {
            path:"manager-user",
            element: <ManagerUser/>
          },
          {
            path:"manager-product",
            element: <ManagerProduct/>
          },
        ]
      },
])

export default routers;
