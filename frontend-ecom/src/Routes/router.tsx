import { createBrowserRouter } from "react-router";
import DashboardRoot from "../Layout/DashboardRoot";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import RoutesError from "../RoutesError";
import Users from "../pages/Users/Users";
import Orders from "../pages/Orders/Orders";

const router = createBrowserRouter([
    {
        path:"/dashboard",
        Component: () => <DashboardRoot />,
        errorElement: <RoutesError />,
        children: [
            {
                index: true,
                path: "/dashboard",
                Component: () => <Dashboard />
            },
            {
            path: "/dashboard/manage/products",
            Component: () => <Products />
            },
            {
                path: "/dashboard/manage/users",
                Component: () => <Users />
            },
            {
                path: "/dashboard/manage/orders",
                Component: ( ) => <Orders />
            }
        ]
    }
])

export default router;