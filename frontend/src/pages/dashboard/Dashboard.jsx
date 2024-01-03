import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import OrderTable from "../OrderTable";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Typography from "@mui/material/Typography";
import axios from "axios";

const Dashboard = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [rows, setRows] = React.useState(null);

  const [totalPrice, setTotalPrice] = React.useState(0);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/order");
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
  }, []);

  React.useEffect(() => {
    console.log(rows);
    console.log(totalPrice);
    if (rows != null) {
      rows.forEach((element) => {
        setTotalPrice(totalPrice + element.amount);
      });
    }
    setTotalPrice(2464.56);
  }, [rows]);

  return (
    <DashboardLayout title="Dashboard">
      {/* Chart */}
      <Grid container>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Deposits price={totalPrice} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h4">Order List</Typography>
            <OrderTable />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
