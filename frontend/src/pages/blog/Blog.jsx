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
import Button from "@mui/material/Button";

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
  title: "Exploring the Enchanting Forests",
  description:
    "Dive into the heart of nature's wonders as we explore the secrets hidden within the lush and enchanting forests. Discover the diverse flora and fauna that thrive in this captivating ecosystem.",
  image:
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
  imageText: "Majestic Forest",
  linkText: "Continue reading...",
};

const featuredPosts = [
  {
    title: "Sunrise Serenity by the Lakeside",
    date: "Jan 2",
    description:
      "Witness the breathtaking beauty of a sunrise by the serene lakeside. Embrace the tranquility as the first light of dawn paints the sky in hues of orange and pink, casting a magical spell on the tranquil waters.",
    image:
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    imageLabel: "Lakeside Sunrise",
    linkText: "Continue reading...",
  },
  {
    title: "The Magnificence of Mountain Peaks",
    date: "Jan 1",
    description:
      "Embark on a journey to the towering mountain peaks and experience the awe-inspiring grandeur of nature. Explore the rugged terrain and marvel at the snow-capped summits that stand tall against the azure sky.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    imageLabel: "Majestic Mountains",
    linkText: "Continue reading...",
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

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

  const navigateTo = () => {
    navigate("/blogpostpage");
  };

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
                        <Button color="primary" onClick={() => navigateTo()}>
                          Continue reading...
                        </Button>
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
