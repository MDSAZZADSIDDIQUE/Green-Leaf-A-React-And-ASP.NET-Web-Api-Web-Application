import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PublishIcon from "@mui/icons-material/Publish";
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

const schema = yup.object({
  title: yup.string().required("Title is required"),
  summary: yup.string().required("Summary is required"),
  content: yup.string().required("content is required"),
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

const PublishBlogPage = () => {
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
    formData.append("subTitle", data.summary);
    formData.append("content", data.content);
    formData.append("image", data.image[0]);
    try {
      await axios.post("https://localhost:44369/api/publishblog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/blogList");
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
        className=" h-screen flex mt-10"
      >
        <Box className=" flex flex-col w-1/2 space-y-10">
          <Typography variant="h4" className="">
            Publish Blog
          </Typography>
          {errors.name?.message ? (
            <TextField
              error
              required
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              {...register("title")}
              helperText={errors.title?.message}
            />
          ) : (
            <TextField
              required
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              {...register("title")}
            />
          )}
          {errors.subTitle?.message ? (
            <TextField
              error
              required
              id="summary"
              label="Summary"
              name="summary"
              autoComplete="summary"
              autoFocus
              {...register("summary")}
              helperText={errors.subTitle?.message}
            />
          ) : (
            <TextField
              required
              id="summary"
              label="Summary"
              name="summary"
              autoComplete="summary"
              autoFocus
              {...register("summary")}
            />
          )}
          {errors.content?.message ? (
            <TextField
              error
              required
              id="content"
              label="Content"
              name="content"
              autoComplete="content"
              autoFocus
              {...register("content")}
              helperText={errors.content?.message}
            />
          ) : (
            <TextField
              required
              id="content"
              label="Content"
              name="content"
              autoComplete="content"
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
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<PublishIcon />}
          >
            Publish
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default PublishBlogPage;
