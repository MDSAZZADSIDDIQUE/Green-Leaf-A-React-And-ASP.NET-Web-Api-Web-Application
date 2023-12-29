import { Link } from "react-router-dom";
import React from "react";
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
