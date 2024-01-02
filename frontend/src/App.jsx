import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <HelmetProvider>
      <Outlet />
    </HelmetProvider>
  );
}
