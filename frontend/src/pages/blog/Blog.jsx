import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  const [blogArticle, setBlogArticle] = React.useState(null);
  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/getblogs");
      setBlogArticle(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
    console.log(blogArticle);
  }, []);

  React.useEffect(() => {}, [blogArticle]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid sx={{ mt: 3 }}>
            {blogArticle &&
              blogArticle.map((post) => (
                <Grid item xs={12} md={6} sx={{ mb: 3 }}>
                  <CardActionArea component="a" href="#">
                    <Card sx={{ display: "flex" }}>
                      <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {post.published_at}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.sub_title}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 160,
                          display: { xs: "none", sm: "block" },
                        }}
                        image={`https://localhost:44369/api/getblogimage/${post.image}`}
                        alt={post.imageLabel}
                      />
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
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
