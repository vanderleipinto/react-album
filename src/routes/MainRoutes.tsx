import { useRoutes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";
import { AlbumPage } from "../pages/AlbumPage";
import { PhotoPage } from "../pages/PhotoPage";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/album/:slug", element: <AlbumPage /> },
    { path: "/photo/:slug", element: <PhotoPage /> },
    { path: "*", element: <NotFound /> },
  ]);
};
