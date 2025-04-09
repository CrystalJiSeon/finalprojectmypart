import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Admin from '../pages/admin/Admin';
import Ceo from '../pages/ceo/Ceo';
import AdminSales from '../pages/admin/AdminSales';

const routes = [
    {path:"/", element:null},
    {path:"/admin", element:<Admin/>},
    {path:"/admin/sales", element:<AdminSales/>},
    {path:"/admin/stock", element:<Admin/>},
    {path:"/admin/class", element:<Admin/>},
    {path:"/admin/teacher", element:<Admin/>},
    {path:"/admin/student", element:<Admin/>},
    {path:"/ceo", element:<Ceo/>},
];

const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children: routes.map((route)=>{
        return {
            index: route.path === "/",
            path: route.path === "/" ? undefined : route.path,
            element: route.element
        }
    })
}]);

export default router; 