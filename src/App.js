import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import NotFound from "./components/assets/NotFound";
import FormCode from "./components/formCode/FormCode";
import View from "./components/view/View";
import Products from "./components/products/Products";
import ProductPage from "./components/productPage/ProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <View>
          <FormCode />
        </View>
      ),
    },
    {
      path: "/products",
      element: (
        <View>
          <Products />
        </View>
      ),
    },
    {
      path: "/prod",
      element: (
        <View>
          <ProductPage />
        </View>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
