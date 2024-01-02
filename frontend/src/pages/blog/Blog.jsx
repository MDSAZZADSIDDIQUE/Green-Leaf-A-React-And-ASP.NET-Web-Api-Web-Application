import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";

const defaultTheme = createTheme();

const mainFeaturedPost = {
  title: "The Wisdom of Trees: Nature's Silent Teachers",
  description:
    "Discover the profound wisdom that trees hold, from their resilience in the face of adversity to the lessons they offer about growth, interconnectedness, and the cycles of life.",
  image: "/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg",
  imageText: "main image description",
  linkText: "Continue reading…",
};

export default function Blog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = React.useState(null);
  const getBlogs = async () => {
    try {
      await axios
        .get("https://localhost:44369/api/getblogs")
        .then((response) => {
          setBlogs(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getBlogs();
  }, []);

  React.useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg" className="mt-10">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {blogs &&
              blogs.map((post) => <FeaturedPost key={post.id} post={post} />)}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
