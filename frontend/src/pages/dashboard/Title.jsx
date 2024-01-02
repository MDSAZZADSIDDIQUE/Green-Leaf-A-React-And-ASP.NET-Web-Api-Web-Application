import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";

const Title = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
