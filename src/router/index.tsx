import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';

const routes = [
    // {path:"/index.html", element:<Home/>},
    {path:"/", element:<Home/>},

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