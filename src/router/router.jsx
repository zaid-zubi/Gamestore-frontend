import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../pages/Home/Home.jsx";
import Products from "../pages/Products/Products.jsx";
import ProductDetails from "../pages/ProductDetails/ProductDetails.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import OrderReceipt from "../pages/OrderReceipt/OrderReceipt.jsx";
import Register from "../pages/Register/Register";

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
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "receipt",
        element: <OrderReceipt />,
      },
    ],
  },
]);

export default router;