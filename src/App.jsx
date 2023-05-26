import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/BlogPosts";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} errorElement={<Error />} />
      <Route path="projects" element={<Projects />} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
