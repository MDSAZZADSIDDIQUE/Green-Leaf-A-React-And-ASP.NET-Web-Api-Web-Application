import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";

const BlogPostPage = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardMedia
          component="img"
          className="h-96"
          image={`https://localhost:44369/api/getblogimage/udpwrgvyuku`}
          alt="Paella dish"
        />
        <CardContent className="space-y-5">
          <Typography variant="h3" color="text.secondary">
            Embracing the Tranquility of Nature
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Md. Sazzad Siddique
          </Typography>
          <Typography variant="h5" color="text.secondary">
            2 December, 2023
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Finding Solace in the Wilderness
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            In the hustle and bustle of modern life, it's easy to forget the
            serene beauty that nature offers. From towering trees to babbling
            brooks, the natural world provides a respite from the chaos of our
            daily routines. This blog explores the therapeutic benefits of
            immersing oneself in nature, delving into the calming effects it has
            on our mental well-being. Join us on a journey of rediscovery as we
            learn to embrace the tranquility of nature and find solace in the
            wilderness.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </DashboardLayout>
  );
};

export default BlogPostPage;
