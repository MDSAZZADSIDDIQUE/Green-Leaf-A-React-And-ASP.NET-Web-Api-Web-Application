import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const ProfilePage = () => {
  const [blog, setBlog] = React.useState(null);
  const getBlog = async () => {
    try {
      await axios
        .get(`https://localhost:44369/api/getuserprofile`)
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
        <Card className="mt-10">
          <CardMedia
            component="img"
            className="h-96"
            image={`https://localhost:44369/api/getuser/fqzzx5yazu2`}
            alt="Paella dish"
          />

          <CardContent className="m-5 space-y-5">
            <Box className="space-y-1">
              <Typography variant="h6">
                First Name: {blog.first_name}
              </Typography>
              <Typography variant="h6">Last Name: {blog.last_name}</Typography>
              <Typography variant="h6">
                Date of Birth:{" "}
                {new Date(blog.date_of_birth).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
              <Typography variant="h6">
                Email Address: {blog.email_address}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </DashboardLayout>
  );
};

export default ProfilePage;
