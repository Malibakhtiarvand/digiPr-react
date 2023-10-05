import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Loader from "../../component/loader/loader";
import Main from "../../component/main/Main";
import Single from "../../component/singleProduct/single";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Main />
      </App>
    ),
    loader: Loader,
  },
  {
    path: "prs/:id",
    loader: Loader,
    element: (
      <App>
        <Single />
      </App>
    ),
  },
]);
