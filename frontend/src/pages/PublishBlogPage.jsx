import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import DashboardLayout from "../components/DashboardLayout";

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

const PublishBlogPage = () => {
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
    <DashboardLayout title="Publish Blog">
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
    </DashboardLayout>
  );
};

export default PublishBlogPage;
