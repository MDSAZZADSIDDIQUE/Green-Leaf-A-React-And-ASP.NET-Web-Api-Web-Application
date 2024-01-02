import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import BallotRoundedIcon from "@mui/icons-material/BallotRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import ShopTwoRoundedIcon from "@mui/icons-material/ShopTwoRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [blogOpen, setBlogOpen] = React.useState(false);

  const handleBlogClick = () => {
    setBlogOpen(!blogOpen);
  };

  const [postOpen, setPostOpen] = React.useState(false);

  const handlePostClick = () => {
    setPostOpen(!postOpen);
  };

  return (
    <React.Fragment>
      <Link to="/userdashboard">
        <ListItemButton>
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ShoppingBagRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Shop" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Link to="/shop">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocalMallRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/cart">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ShoppingCartRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/yourorder">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ShoppingBasketRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Your Orders" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/addproduct">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddBusinessRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/productlist">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StoreRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Product List" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/order">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StoreRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Order List" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>

      {/* Blog */}
      <ListItemButton onClick={handleBlogClick}>
        <ListItemIcon>
          <RssFeedRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Blog" />
        {blogOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Link to="/blogs">
        <Collapse in={blogOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BookRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/publishblog">
        <Collapse in={blogOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EditNoteRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Publish Blog" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/blogList">
        <Collapse in={blogOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BallotRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Your Blogs" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>

      <ListItemButton onClick={handlePostClick}>
        <ListItemIcon>
          <PostAddRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Post" />
        {postOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Link to="/posts">
        <Collapse in={postOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BookRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Post" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/createpost">
        <Collapse in={postOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EditNoteRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Create Post" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/postlist">
        <Collapse in={postOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BallotRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Your Posts" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/">
        <ListItemButton>
          <ListItemIcon>
            <LogoutRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export default Sidebar;
