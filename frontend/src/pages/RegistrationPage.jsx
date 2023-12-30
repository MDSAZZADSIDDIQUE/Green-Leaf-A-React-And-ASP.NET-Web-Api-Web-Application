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
import * as React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    dateOfBirth: yup.date().required("Date of Birth is required"),
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

const RegistrationPage = () => {
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
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Link to="/">Green Leaf</Link>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center h-screen"
      >
        <Box className="flex flex-col w-96 space-y-5">
          <Typography variant="h4" className="text-center">
            Sign Up
          </Typography>
          {errors.firstName?.message ? (
            <TextField
              error
              required
              id="first-name"
              label="First Name"
              name="firstName"
              autoComplete="first-name"
              autoFocus
              {...register("firstName")}
              helperText={errors.email?.message}
            />
          ) : (
            <TextField
              required
              id="first-name"
              label="First Name"
              name="firstName"
              autoComplete="first-name"
              autoFocus
              {...register("firstName")}
            />
          )}
          {errors.lastName?.message ? (
            <TextField
              error
              required
              id="last-name"
              label="Last Name"
              name="lastName"
              autoComplete="last-name"
              autoFocus
              {...register("lastName")}
              helperText={errors.email?.message}
            />
          ) : (
            <TextField
              required
              id="last-name"
              label="Last Name"
              name="lastName"
              autoComplete="last-name"
              autoFocus
              {...register("lastName")}
            />
          )}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
          {errors.email?.message ? (
            <TextField
              error
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email")}
              helperText={errors.email?.message}
            />
          ) : (
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email")}
            />
          )}
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                autoComplete="password"
                {...register("password")}
              />
            </FormControl>
          )}
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
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                aria-describedby="confirm-password"
                autoComplete="confirm-password"
              />
              <FormHelperText id="component-helper-text">
                {errors.password?.message}
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
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                autoComplete="confirm-password"
              />
            </FormControl>
          )}
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" variant="contained">
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RegistrationPage;
