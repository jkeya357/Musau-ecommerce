import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from './App'
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ProductListPage/ShopApplicationWrapper";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import { loadProductById } from "./routes/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper/>,
    children:[
      {
        path: "/",
        element: <App/>
      },
      {
        path:"/women",
        element:<ProductListPage categoryType={'WOMEN'}/>
      },
      {
        path:"men",
        element:<ProductListPage categoryType={'MEN'}/>
      },
      {
        path:"/product/:productId",
        loader: loadProductById,
        element: <ProductDetails/>
      }
    ]
  },
  
])