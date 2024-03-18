import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import App from "../App";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Carts from "./Carts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Carts />,
      },
    ],
  },
]);

export default router;
