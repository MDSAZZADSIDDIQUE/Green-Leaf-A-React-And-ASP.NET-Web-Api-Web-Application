import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const Deposits = (props) => {
  return (
    <React.Fragment>
      <Title>Total Sales</Title>
      <Typography variant="h4">৳ {props.price}</Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 3 January, 2023
      </Typography>
      <div>
        <Link to="/acceptorder">Sales Report</Link>
      </div>
    </React.Fragment>
  );
};

export default Deposits;
