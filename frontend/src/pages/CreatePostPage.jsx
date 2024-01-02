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
import PublishIcon from "@mui/icons-material/Publish";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
const schema = yup
  .object({
    caption: yup.string().required("Caption is required"),
  })
  .required();

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("caption", data.caption);
    formData.append("image", data.image[0]);
    try {
      await axios.post("https://localhost:44369/api/createPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/postlist");
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
        className=" h-screen flex mt-10"
      >
        <Box className=" flex flex-col w-1/2 space-y-10">
          <Typography variant="h4">Create Post</Typography>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            size="large"
          >
            Upload file
            <VisuallyHiddenInput type="file" {...register("image")} />
          </Button>
          {errors.caption?.message ? (
            <TextField
              error
              required
              id="caption"
              label="Caption"
              name="caption"
              autoComplete="caption"
              autoFocus
              {...register("caption")}
              helperText={errors.caption?.message}
            />
          ) : (
            <TextField
              required
              id="caption"
              label="Caption"
              name="caption"
              autoComplete="caption"
              autoFocus
              {...register("caption")}
            />
          )}
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<BorderColorRoundedIcon />}
          >
            Create Post
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default CreatePostPage;
