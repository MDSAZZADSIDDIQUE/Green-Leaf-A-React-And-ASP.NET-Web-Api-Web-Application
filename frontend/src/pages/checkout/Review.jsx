import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import axios from "axios";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  const [products, setProducts] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/cart");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
  }, []);

  React.useEffect(() => {
    if (products != null) {
      var totalPrice = 0;
      for (const product of products) {
        totalPrice += product.price;
      }
      setTotal(totalPrice);
    }
  }, [products]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products &&
          products.map((product) => (
            <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={product.product_name}
                secondary={product.desc}
              />
              <Typography variant="body2">
                {product.price.toFixed(2)}
              </Typography>
            </ListItem>
          ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {total.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
