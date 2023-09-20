import React from 'react';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HomeScreens from "./screens/HomeScreens";
import { Outlet } from "react-router";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
