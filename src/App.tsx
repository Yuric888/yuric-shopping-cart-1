import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import { Container } from "react-bootstrap";
const NavbarWrapper = () => {
  return (
    <div className="pb-5">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
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
