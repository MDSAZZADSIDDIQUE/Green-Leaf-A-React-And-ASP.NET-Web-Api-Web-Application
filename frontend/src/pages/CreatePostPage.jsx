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

const CreatePostPage = () => {
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
    formData.append("caption", data.caption);
    formData.append("image", data.image[0]);
    try {
      await axios.post("https://localhost:44369/api/createPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout title="Create Post">
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
              label="Caption"
              name="name"
              autoComplete="name"
              autoFocus
              {...register("caption")}
              helperText={errors.name?.message}
            />
          ) : (
            <TextField
              required
              id="name"
              label="Caption"
              name="name"
              autoComplete="name"
              autoFocus
              {...register("caption")}
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

export default CreatePostPage;
