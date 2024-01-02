import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiDrawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import DashboardLayout from "../components/DashboardLayout";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().positive().required("Price is required"),
  category: yup.string().required("Category is required"),
});

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

const AddProductPage = () => {
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
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("status", status);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", data.image[0]);
    try {
      await axios.post("https://localhost:44369/api/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/productlist");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout title="Add Product">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center h-screen"
      >
        <Box className="flex flex-col w-96 space-y-5">
          <Typography variant="h4" className="text-center">
            Add Product
          </Typography>
          {errors.name?.message ? (
            <TextField
              error
              required
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              {...register("name")}
              helperText={errors.name?.message}
            />
          ) : (
            <TextField
              required
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              {...register("name")}
            />
          )}
          {errors.price?.message ? (
            <TextField
              error
              required
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              autoFocus
              {...register("price")}
              helperText={errors.price?.message}
            />
          ) : (
            <TextField
              required
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              autoFocus
              {...register("price")}
            />
          )}
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={"In stock"}>In stock</MenuItem>
              <MenuItem value={"Out of stock"}>Out of stock</MenuItem>
            </Select>
          </FormControl>
          {errors.description?.message ? (
            <TextField
              error
              required
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              autoFocus
              {...register("description")}
              helperText={errors.description?.message}
            />
          ) : (
            <TextField
              required
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              autoFocus
              {...register("description")}
            />
          )}
          {errors.category?.message ? (
            <TextField
              error
              required
              id="category"
              label="Category"
              name="category"
              autoComplete="category"
              autoFocus
              {...register("category")}
              helperText={errors.category?.message}
            />
          ) : (
            <TextField
              required
              id="category"
              label="Category"
              name="category"
              autoComplete="category"
              autoFocus
              {...register("category")}
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
            Add
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default AddProductPage;
