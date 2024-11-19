import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

export default function LayOut() {
  return (
    <>
      <Navbar />
      <SnackbarProvider maxSnack={3}>
        <Outlet />
      </SnackbarProvider>
      <Footer />
    </>
  );
}
