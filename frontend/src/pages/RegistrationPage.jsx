import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import axios from "axios";
import dayjs from "dayjs";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  emailAddress: yup
    .string()
    .email("Email Address must be a valid email")
    .required("Email Address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required.")
    .min(6, "Password must be at least 6 characters")
    .oneOf([yup.ref("password"), null], "Passwords does not match."),
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

const defaultTheme = createTheme();

const RegistrationPage = () => {
  // Date Of Birth
  const [dateOfBirth, setDateOfBirth] = React.useState(dayjs("2022-04-17"));

  // Show Password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Show Confirm Password
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("emailAddress", data.emailAddress);
    formData.append("password", data.password);
    formData.append("picture", data.picture[0]);
    try {
      await axios.post("https://localhost:44369/api/registeruser", formData, {
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
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {errors.firstName?.message ? (
                    <TextField
                      error
                      required
                      fullWidth
                      id="first-name"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                      autoFocus
                      {...register("firstName")}
                      helperText={errors.firstName?.message}
                    />
                  ) : (
                    <TextField
                      required
                      fullWidth
                      id="first-name"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                      autoFocus
                      {...register("firstName")}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {errors.lastName?.message ? (
                    <TextField
                      error
                      required
                      fullWidth
                      id="last-name"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      {...register("lastName")}
                      helperText={errors.lastName?.message}
                    />
                  ) : (
                    <TextField
                      required
                      fullWidth
                      id="last-name"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      {...register("lastName")}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Controlled picker"
                        value={dateOfBirth}
                        onChange={(newValue) => setDateOfBirth(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  {errors.emailAddress?.message ? (
                    <TextField
                      error
                      required
                      fullWidth
                      id="email-address"
                      label="Email Address"
                      name="emailAddress"
                      autoComplete="email"
                      {...register("emailAddress")}
                      helperText={errors.emailAddress?.message}
                    />
                  ) : (
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email-address"
                      label="Email Address"
                      name="emailAddress"
                      autoComplete="email"
                      {...register("emailAddress")}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  {errors.password?.message ? (
                    <FormControl variant="outlined" error required>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <OutlinedInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        aria-describedby="password"
                        autoComplete="password"
                        {...register("password")}
                      />
                      <FormHelperText id="password">
                        {errors.password?.message}
                      </FormHelperText>
                    </FormControl>
                  ) : (
                    <FormControl variant="outlined" required>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <OutlinedInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        autoComplete="password"
                        {...register("password")}
                      />
                    </FormControl>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {errors.confirmPassword?.message ? (
                    <FormControl variant="outlined" error required>
                      <InputLabel htmlFor="confirm-password">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                        aria-describedby="confirm-password"
                        autoComplete="confirm-password"
                        {...register("confirmPassword")}
                      />
                      <FormHelperText id="component-helper-text">
                        {errors.confirmPassword?.message}
                      </FormHelperText>
                    </FormControl>
                  ) : (
                    <FormControl variant="outlined" required>
                      <InputLabel htmlFor="confirm-password">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                        autoComplete="confirm-password"
                        {...register("confirmPassword")}
                      />
                    </FormControl>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <VisuallyHiddenInput type="file" {...register("picture")} />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default RegistrationPage;
