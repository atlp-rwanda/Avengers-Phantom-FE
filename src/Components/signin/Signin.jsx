import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SvgIcon from "@mui/material/SvgIcon";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Input from "@material-ui/core/Input";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#012241",
    },
  },
});
const baseUrl = process.env.BACKEND_URL;

const URL = 'https://new-avengers-be-deploy.herokuapp.com'


export const Signin = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [prod, setprod] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = prod;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setprod({ ...prod, [name]: value });
  };
  const submitRecord = (e) => {
    e.preventDefault();

    const send = {
      email: prod.email,
      password: values.password,
    };

    fetch(`${baseUrl}/users/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(send),
    })
      .then(function (response) {
        if (response.status !== 200) {
          response.json().then(function (data) {
            alert(`'Looks like there was a problem   ' ${data.message}`);
          });
          return;
        }
        response.json().then(function (data) {
          location.replace("../dashboard");
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("useruuid", data.data.user.uuid);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          left: 0,
          right: 0,

          boxSizing: "border-box",
          position: "absolute",

          top: 0,

          bottom: 0,
        }}
      >
        <Box
          sx={{
            pt: 10,

            display: "flex",
            justifyContent: "space-around",

            height: "100%",
            flexWrap: "wrap",
            color: "primary.main",
            background: `linear-gradient(rgba(1, 34, 65, 0.5),rgba(1, 34, 65, 0.9)), url(https://res.cloudinary.com/avengersphantom/image/upload/v1656445464/Images/images/b2_u3evhb.svg)`,
            // backgroundColor: 'secondary.main',
            backgroundSize: "cover",
            border: "1px solid black",
            display: { xs: "flex  ", md: " flex " },
          }}
        >
          <Box
            sx={{
              height: "fit-content",
              width: "253px",
              fontWeight: "400",
              mt: 8,
              ml: 8,
              fontSize: "40px",
              display: { xs: "none ", md: " flex", flexDirection: "column" },
            }}
          >
            Phantom Transportation
            <button
              style={{
                marginTop: "150px",
                width: "150px",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                borderStyle: "none",
              }}
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </Box>

          <Box
            sx={{
              p: 2,
              mb: 10,
              height: "fit-content",
              width: "400px",
              display: "flex",
              backgroundColor: "primary.main",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password" sx={{ mt: 5 }}>
              Email
            </InputLabel>
            <Input
              label="email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              sx={{ Color: "secondary.main" }}
            />

            <FormControl variant="filled">
              <InputLabel htmlFor="standard-adornment-password" sx={{ mt: 5 }}>
                Enter your Password
              </InputLabel>
              <Input
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: "center", m: 4 }}>
              <Button
                color="secondary"
                onClick={submitRecord}
                variant="contained"
                sx={{
                  height: "30.16px",
                  width: "150.37px",
                  borderRadius: "45.125px",
                }}
              >
                <Typography sx={{ mx: "auto", width: "100.37px" }}>
                  sign in
                </Typography>
              </Button>
            </Box>
            <Box sx={{ color: "secondary.main" }}>
              <Button
                sx={{
                  my: 2,
                  color: "secondary.main",
                  display: "block",
                  display: "flex",
                  justifyContent: "center",
                }}
                component={Link}
                to={`/reset`}
              >
                <Typography
                  sx={{ textDecoration: "underline" }}
                  display="inline"
                >
                  forget password reset
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
