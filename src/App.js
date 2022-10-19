import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import Main from "./layouts/Main";
import { productsAndCardLoaders } from "./loaders/ProductsAndCardLoaders";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/shop",
          loader: () => {
            return fetch("products.json");
          },
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCardLoaders,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path:'login',
          element: <LogIn></LogIn>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
