import Box from "@mui/material/Box";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Green Leaf</title>
      </Helmet>
      <Box
        className="bg-cover bg-center h-screen flex flex-col text-white"
        style={{
          backgroundImage: "url('riski-andriansyah-Gl6GljPtJpo-unsplash.jpg')",
        }}
      >
        <Box className="flex justify-between bg-blue-950 p-5">
          <Box>
            <Link to="/">Green Leaf</Link>
          </Box>
          <Box className="space-x-5">
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
          </Box>
        </Box>
        <Box className="flex-1 flex w-2/3 tracking-widest flex-col justify-center space-y-10 ml-10">
          <h1 className="font-thin text-7xl leading-normal">
            Welcome to the kingdom for Nature Enthusiast
          </h1>
          <button
            className="w-1/3 p-5 bg-blue-950 rounded-lg shadow-white shadow-2xl"
            variant="contained"
          >
            Explore Now
          </button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
