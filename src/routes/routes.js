import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import Users from "../pages/Users";
import Admin from "../pages/Admin";
import AddProduct from "../pages/Dashboard/AddProduct";
import Dashboard from "../layout/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/users",
    element: <Main />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default routes;
