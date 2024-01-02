import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const CartPage = () => {
  const [rows, setRows] = React.useState(null);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/cart");
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
  }, []);
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout");
  };

  React.useEffect(() => {}, [rows]);

  return (
    <DashboardLayout title="Cart">
      {rows &&
        rows.map((card) => (
          <Paper elevation={3} fullwidth className="mb-5 flex w-full">
            <Box className="flex items-end justify-end">
              <img
                src={`https://localhost:44369/api/getproductimage/${card.image}`}
                className="h-40"
              />
            </Box>
            <Box className="flex flex-col p-5 justify-center">
              <Typography variant="h5">{card.product_name}</Typography>
              <Typography variant="h6">{card.quantity}</Typography>
            </Box>
            <Box className="flex flex-1 items-center justify-end p-5">
              <Typography variant="h6">৳ {card.price.toFixed(2)}</Typography>
            </Box>
          </Paper>
        ))}
      <Button variant="contained" onClick={() => checkout()}>
        Checkout
      </Button>
    </DashboardLayout>
  );
};

export default CartPage;
