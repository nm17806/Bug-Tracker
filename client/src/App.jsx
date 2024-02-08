import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import compenents and pages
import Sidebar from "./components/Shared/Sidebar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Shared/Navbar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
