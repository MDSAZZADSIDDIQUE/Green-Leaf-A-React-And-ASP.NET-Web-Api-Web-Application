import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const BlogPostPage = () => {
  const { blogID } = useParams();
  const [blog, setBlog] = React.useState(null);
  const getBlog = async () => {
    try {
      await axios
        .get(`https://localhost:44369/api/getblog/${blogID}`)
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
            image={`https://localhost:44369/api/getblogimage/${blog.image}`}
            alt="Paella dish"
          />

          <CardContent className="m-5 space-y-5">
            <Box className="space-y-1">
              <Typography variant="h4">{blog.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Md. Sazzad Siddique
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {new Date(blog.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Box>
            <Box className="space-y-3">
              <Typography variant="h6" color="text.secondary">
                {blog.sub_title}
              </Typography>
              <Typography variant="body1">{blog.content_body}</Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </DashboardLayout>
  );
};

export default BlogPostPage;
