import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import * as React from "react";

const PostCard = (props) => {
  return (
    <Card className="w-1/2">
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={`https://localhost:44369/api/getuser/fqzzx5yazu2`}
          />
        }
        title="Md. Sazzad Siddique"
        subheader={new Date(props.posts.created_at).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        )}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.posts.caption}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={`https://localhost:44369/api/getpostimage/${props.posts.image}`}
        alt="Paella dish"
      />
    </Card>
  );
};

export default PostCard;
