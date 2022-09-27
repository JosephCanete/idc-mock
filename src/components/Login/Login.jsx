import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idListener, setIdListener] = useState(false);
  const [passwordListener, setPasswordListener] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleOnBlur = (event) => {
    if (event.target.id === "id") {
      return id.length < 5 ? setIdListener(true) : setIdListener(false);
    }
    if (event.target.id === "password") {
      return password.length < 5
        ? setPasswordListener(true)
        : setPasswordListener(false);
    }
  };

  const handleOnChange = (event) => {
    if (event.target.id === "id") {
      setId(event.target.value);
    }
    if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  const handleOnClick = () => {
    setId("");
    setPassword("");
  };

  return (
    <div className="container">
      <Typography variant="h3">Welcome to The Portal</Typography>
      <TextField
        id="id"
        error={idListener}
        value={id}
        label="User ID"
        variant="standard"
        onChange={(event) => handleOnChange(event)}
        onBlur={handleOnBlur}
        helperText="Character must be at least 5"
      />
      <TextField
        id="password"
        error={passwordListener}
        value={password}
        label="Password"
        type="password"
        variant="standard"
        onChange={(event) => handleOnChange(event)}
        onBlur={handleOnBlur}
      />

      <Button
        variant="contained"
        color="success"
        className="forgotPassword"
        disabled={idListener || passwordListener ? true : false}
        onClick={handleOnClick}
      >
        Login
      </Button>
      <Button variant="contained" color="error" className="forgotPassword">
        Forgot Password?
      </Button>
    </div>
  );
}
