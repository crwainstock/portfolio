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
import SinglePost from "./pages/SinglePost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} errorElement={<Error />} />
      <Route path="about" element={<About />} errorElement={<Error />} />
      <Route path="blog" element={<Blog />} errorElement={<Error />} />
      <Route
        path="post/:slug"
        element={<SinglePost />}
        //This element not rendering properly. Something not working with fetch, I think.
        errorElement={<Error />}
      />
      <Route path="projects" element={<Projects />} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
