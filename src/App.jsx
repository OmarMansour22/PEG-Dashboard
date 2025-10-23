import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Layout from "./Layout/Layout";
import { Bounce, ToastContainer } from "react-toastify";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Profile /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        closeButton={false}
      />
    </>
  );
}
