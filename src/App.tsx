import { createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { MainLayout } from "./components/MainLayout";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { ForbiddenPage } from "./pages/ForbiddenPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ProductPage } from "./pages/ProductPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { CartPage } from "./pages/CartPage";

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/forbidden" state={{ from: location.pathname }} replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "catalog/:categoryName",
        element: <CatalogPage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "forbidden",
        element: <ForbiddenPage />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "cart",
            element: <CartPage />,
          },
          {
            path: "checkout",
            element: <CheckoutPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
