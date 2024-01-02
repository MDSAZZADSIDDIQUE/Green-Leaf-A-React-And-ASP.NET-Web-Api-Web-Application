import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Link to="/">Green Leaf</Link>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </>
  );
};

export default HomePage;
