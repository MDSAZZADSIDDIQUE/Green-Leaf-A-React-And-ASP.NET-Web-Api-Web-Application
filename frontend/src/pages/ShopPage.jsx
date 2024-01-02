import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";

const ShopPage = () => {
  const [value, setValue] = React.useState(4);
  const [rows, setRows] = React.useState(null);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/shop");
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
  }, []);

  React.useEffect(() => {}, [rows]);

  const addToCart = async (data) => {
    console.log(data);
    try {
      await axios.get(`https://localhost:44369/api/addtocart/${data}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout title="Shop">
      {rows &&
        rows.map((card) => (
          <Grid item key={card.id} xs={16} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: "100%",
                }}
                image={`https://localhost:44369/api/getproductimage/${card.image}`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5">
                  {card.name}
                </Typography>
                <Typography variant="h6">৳ {card.price.toFixed(2)}</Typography>
                <Typography variant="subtitle1">{card.status}</Typography>
                <Rating name="read-only" value={value} readOnly />
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartRoundedIcon />}
                  fullWidth
                  onClick={() => addToCart(card.id)}
                >
                  Add item
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </DashboardLayout>
  );
};

export default ShopPage;
