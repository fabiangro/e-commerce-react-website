import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";

import { createBrowserRouter, RouterProvider, Outlet, redirect } from "react-router-dom";
import { publicRequest } from "./requests";


const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => (await publicRequest.get('products'))

      },
      {
        path: "product/:id",
        element: <Product/>,
        loader: async ({params}) => (await publicRequest.get(`/products/${params.id}`))
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />
      },
      // {
      //   path: "/admin/orders",
      //   element: <Orders />,
      //   loader: async () => (await publicRequest.get('orders')),
      // }
    ]
  }
])



const App = ()=>{
  return <div>
    <RouterProvider router={router}/>
  </div>
}


export default App;
