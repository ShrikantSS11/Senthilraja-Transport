import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Fleet } from "./components/Fleet";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "fleet", Component: Fleet },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
      { path: "*", Component: NotFound },
    ],
  },
]);