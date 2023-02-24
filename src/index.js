// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Amplify
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { studioTheme } from "./ui-components";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Error Page
import ErrorPage from "./error-page";

// Pages
import Root from "./routes/Root";
import Account from "./routes/Account";
import SignUp from "./routes/Sign-Up";

Amplify.configure(awsconfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/account/:accountId",
        element: <Account />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AmplifyProvider>
      <ThemeProvider theme={studioTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AmplifyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
