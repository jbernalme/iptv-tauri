import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SidebarLayout from "@/components/layout/sidebar-layout";
// Importa aquí tus otras páginas, por ejemplo:
// import Settings from "./pages/Settings";

const router = createHashRouter([
  {
    path: "/",
    Component: SidebarLayout, // El padre siempre se muestra
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/prueba",
        element: (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🚀 ¡Funciona!</h1>
            <p>Estás en la ruta de prueba.</p>
            <a href="#/">Volver al inicio</a>
          </div>
        ),
      },
      {
        path: "/livetv",
        element: (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🚀 ¡Funciona!</h1>
            <p>Estás en la ruta de livetv.</p>
            <a href="#/">Volver al inicio</a>
          </div>
        ),
      },
      {
        path: "/movies",
        element: (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🚀 ¡Funciona!</h1>
            <p>Estás en la ruta de movies.</p>
            <a href="#/">Volver al inicio</a>
          </div>
        ),
      },
      {
        path: "/series",
        element: (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🚀 ¡Funciona!</h1>
            <p>Estás en la ruta de series.</p>
            <a href="#/">Volver al inicio</a>
          </div>
        ),
      },
      {
        path: "/favs",
        element: (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🚀 ¡Funciona!</h1>
            <p>Estás en la ruta de favs.</p>
            <a href="#/">Volver al inicio</a>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
