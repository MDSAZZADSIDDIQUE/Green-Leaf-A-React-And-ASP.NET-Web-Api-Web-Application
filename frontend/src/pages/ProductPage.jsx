import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const ProductPage = () => {
  const { productID } = useParams();
  const [blog, setBlog] = React.useState(null);
  const getBlog = async () => {
    try {
      await axios
        .get(`https://localhost:44369/api/getproduct/${productID}`)
        .then((response) => {
          setBlog(response.data);
        });
      console.log(blog);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getBlog();
  }, []);

  return (
    <DashboardLayout>
      {blog && (
        <Box className=" justify-center items-center flex">
          <Card className="mt-10 w-1/2">
            <CardMedia
              component="img"
              className="h-96"
              image={`https://localhost:44369/api/getproductimage/${blog.image}`}
              alt="Paella dish"
            />

            <CardContent className="m-5 space-y-5">
              <Typography variant="h5">{blog.name}</Typography>
              <Typography variant="h6">৳ {blog.price.toFixed(2)}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {blog.status}
              </Typography>
              <Typography variant="subtitle1">{blog.category}</Typography>
              <Typography variant="subtitle1">{blog.description}</Typography>
              <Typography variant="subtitle1">
                Seller: Md. Sazzad Siddique
              </Typography>
              <Typography variant="subtitle1">
                Added at:{" "}
                {new Date(blog.date_added).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </DashboardLayout>
  );
};

export default ProductPage;
