import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Box
      className=" bg-cover bg-center"
      style={{
        backgroundImage: "url('riski-andriansyah-Gl6GljPtJpo-unsplash.jpg')",
      }}
    >
      <Box className="flex justify-between p-5 text-white text-xl">
        <Box>
          <Link to="/">Green Leaf</Link>
        </Box>
        <Box className="space-x-5">
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </Box>
      </Box>
      <Box className="text-9xl font-thin text-white flex h-screen">
        <Box className="justify-center flex flex-col w-1/2 ml-10 ">
          <h1>The hub for Nature Enthusiast</h1>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
