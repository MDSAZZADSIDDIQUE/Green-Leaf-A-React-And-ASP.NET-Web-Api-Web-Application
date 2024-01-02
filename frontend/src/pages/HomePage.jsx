import Box from "@mui/material/Box";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      className=" bg-cover bg-center"
      style={{
        backgroundImage: "url('riski-andriansyah-Gl6GljPtJpo-unsplash.jpg')",
      }}
    >
      <Helmet>
        <title>Green Leaf</title>
      </Helmet>
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
    </Box>
  );
};

export default HomePage;
