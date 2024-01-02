import { yupResolver } from "@hookform/resolvers/yup";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Sidebar from "./dashboard/Sidebar";
import { useNavigate } from "react-router-dom";

const schema = yup.object({});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const PublishBlogPage = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Select
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("category", data.content);
    formData.append("image", data.image[0]);
    try {
      await axios.post("https://localhost:44369/api/publishblog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Sidebar />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-center items-center h-screen"
                >
                  <Box className="flex flex-col w-96 space-y-5">
                    <Typography variant="h4" className="text-center">
                      Publish Blog
                    </Typography>
                    {errors.name?.message ? (
                      <TextField
                        error
                        required
                        id="name"
                        label="Title"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        {...register("title")}
                        helperText={errors.name?.message}
                      />
                    ) : (
                      <TextField
                        required
                        id="name"
                        label="Title"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        {...register("title")}
                      />
                    )}
                    {errors.price?.message ? (
                      <TextField
                        error
                        required
                        id="price"
                        label="Sub-title"
                        name="price"
                        autoComplete="price"
                        autoFocus
                        {...register("subTitle")}
                        helperText={errors.price?.message}
                      />
                    ) : (
                      <TextField
                        required
                        id="price"
                        label="Sub-title"
                        name="price"
                        autoComplete="price"
                        autoFocus
                        {...register("subTitle")}
                      />
                    )}
                    {errors.description?.message ? (
                      <TextField
                        error
                        required
                        id="description"
                        label="Content"
                        name="description"
                        autoComplete="description"
                        autoFocus
                        {...register("content")}
                        helperText={errors.description?.message}
                      />
                    ) : (
                      <TextField
                        required
                        id="description"
                        label="Content"
                        name="description"
                        autoComplete="description"
                        autoFocus
                        {...register("content")}
                      />
                    )}
                    <Button
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload file
                      <VisuallyHiddenInput type="file" {...register("image")} />
                    </Button>
                    <Button type="submit" variant="contained">
                      Publish
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PublishBlogPage;
