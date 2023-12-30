import { yupResolver } from "@hookform/resolvers/yup";
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
import * as React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email Address must be a valid email")
      .required("Email Address is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const LoginPage = () => {
  // Show Password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
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
            Sign In
          </Typography>
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
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                aria-describedby="component-helper-text"
                autoComplete="current-password"
                {...register("password")}
              />
              <FormHelperText id="component-helper-text">
                {errors.password?.message}
              </FormHelperText>
            </FormControl>
          ) : (
            <FormControl variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                autoComplete="current-password"
                {...register("password")}
              />
            </FormControl>
          )}
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

export default LoginPage;
