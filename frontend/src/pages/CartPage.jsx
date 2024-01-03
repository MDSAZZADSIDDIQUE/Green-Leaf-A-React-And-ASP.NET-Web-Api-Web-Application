import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const CartPage = () => {
  const [rows, setRows] = React.useState(null);
  const [totalPrice, setTotalPrice] = React.useState(0);

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

  React.useEffect(() => {
    if (rows != null) {
      rows.forEach((element) => {
        setTotalPrice(totalPrice + element.price);
      });
    }
  }, [rows]);

  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout");
  };

  const deleteCartItem = async (data) => {
    try {
      const response = await axios.get(
        `https://localhost:44369/api/deletecartitem/${data}`
      );
    } catch (error) {
      console.error(error);
    }
    getProductList();
  };

  React.useEffect(() => {}, [rows]);

  return (
    <DashboardLayout title="Cart">
      <Box className="mt-10">
        <Grid container>
          {rows &&
            rows.map((card) => (
              <Grid key={card.id} item xs={12} sx={{ mb: 3 }} className="h-40">
                <Card sx={{ display: "flex" }} className="h-full">
                  <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                    image={`https://localhost:44369/api/getproductimage/${card.image}`}
                    alt={card.imageLabel}
                  />
                  <CardContent sx={{ flex: 1 }} className="flex ml-10">
                    <Box className="flex flex-col justify-center space-y-5">
                      <Typography component="h2" variant="h5">
                        {card.product_name}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        Quantity: {card.quantity}
                      </Typography>
                    </Box>
                    <Box className="flex justify-end items-center flex-1 space-x-5 mr-5">
                      <Typography variant="h6">
                        ৳ {card.price.toFixed(2)}
                      </Typography>
                      <IconButton
                        aria-label="views"
                        onClick={() => deleteCartItem(card.id)}
                      >
                        <DeleteRoundedIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          <Box className="flex justify-end items-center flex-1 mt-5">
            <Typography variant="h6">
              Total Amount: ৳ {totalPrice.toFixed(2)}
            </Typography>
          </Box>
        </Grid>
        <Box className="mt-10 flex justify-end items-center">
          <Button fullwidth variant="contained" onClick={() => checkout()}>
            Checkout
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default CartPage;
