import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
const NavbarWrapper = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="pb-5">
        <Outlet />
      </Container>
    </ShoppingCartProvider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/", // yes, again
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
