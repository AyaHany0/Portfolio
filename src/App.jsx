import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Articles from "./components/Articles/Articles";
import Works from "./components/Works/Works";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Credentials from "./components/Credentials/Credentials";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import LayOut from "./components/LayOut/LayOut";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blog/articles", element: <Articles /> },
        { path: "/works", element: <Works /> },
        { path: "/works/project", element: <Project /> },
        { path: "/contact", element: <Contact /> },
        { path: "/credentials", element: <Credentials /> },
        { path: "/services", element: <Services /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
