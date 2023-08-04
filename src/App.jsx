import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Receipts from "./pages/Receipts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: ROUTES.DASHBOARD,
      element: (
        // <ProtectedRoute>
        <Dashboard />
        // </ProtectedRoute>
      ),
    },
    {
      path: ROUTES.PRODUCTS,
      element: (
        // <ProtectedRoute>
        <Product />
        // </ProtectedRoute>
      ),
    },
    {
      path: ROUTES.RECEIPTS,
      element: (
        // <ProtectedRoute>
        <Receipts />
        // </ProtectedRoute>
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
