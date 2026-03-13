import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Browse from "./Browse";

const Demo = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Demo;
