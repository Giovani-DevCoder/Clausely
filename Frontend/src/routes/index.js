import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp"
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import ModelConfig from "../pages/ModelConfig";
import AgentConsole from "../pages/AgentConsole"
import DatasetExplorer from "../pages/DatasetExplorer"

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category/:categoryname",
                element : <CategoryProduct/>
            },
            {
                path : "dashboard",
                element : <Dashboard/>
            },
            {
                path : "projects",
                element : <Projects/>
            },
            {
                path : "model-configuration",
                element : <ModelConfig/>
            },
            {
                path : "agent-console",
                element : <AgentConsole/>
            },
            {
                path : "dataset-explorer",
                element : <DatasetExplorer/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
        ]
    }
])

export default router